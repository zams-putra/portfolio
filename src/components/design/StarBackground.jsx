import { useEffect, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 5000; // turunin aja cuk kasian masa 6000 
const ROTATION_SPEED = 0.00008;
const SPREAD = 800;
const DEPTH = 1200;

export default function StarBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 2000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(STAR_COUNT * 3);
    const aColors   = new Float32Array(STAR_COUNT * 3);
    const sizes     = new Float32Array(STAR_COUNT);
    const seeds     = new Float32Array(STAR_COUNT);

    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#c8d8f0"),
      new THREE.Color("#a0b8e0"),
      new THREE.Color("#4ade80"),
      new THREE.Color("#e2e8f0"),
      new THREE.Color("#94a3b8"),
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * SPREAD;
      positions[i3 + 1] = (Math.random() - 0.5) * SPREAD;
      positions[i3 + 2] = (Math.random() - 0.5) * DEPTH;

      const col = palette[Math.floor(Math.random() * palette.length)];
      const isGreen = col.g > 0.8 && col.r < 0.5;
      const finalCol = (isGreen && Math.random() > 0.04) ? palette[0] : col;
      aColors[i3]     = finalCol.r;
      aColors[i3 + 1] = finalCol.g;
      aColors[i3 + 2] = finalCol.b;

      sizes[i]  = Math.random() * 2.5 + 0.3;
      seeds[i]  = Math.random() * 1000;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aColor",   new THREE.BufferAttribute(aColors, 3));
    geometry.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("seed",     new THREE.BufferAttribute(seeds, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime:    { value: 0 },
        uDepth:   { value: DEPTH },
        uSpread:  { value: SPREAD },
        uCameraZ: { value: camera.position.z },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uDepth;
        uniform float uSpread;
        uniform float uCameraZ;

        attribute float size;
        attribute vec3 aColor;
        attribute float seed;

        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = aColor;

        
          float driftZ = mod(position.z + uTime * 15.0 + seed, uDepth) - uDepth * 0.5;
          vec3 pos = vec3(position.x, position.y, driftZ);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          float dist = -mvPosition.z;
          vAlpha = smoothstep(600.0, 100.0, dist);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float strength = 1.0 - smoothstep(0.0, 0.5, d);
          gl_FragColor = vec4(vColor, strength * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

   
    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      material.uniforms.uTime.value = clock.getElapsedTime();
      stars.rotation.z += ROTATION_SPEED;
      stars.rotation.x += ROTATION_SPEED * 0.3;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}