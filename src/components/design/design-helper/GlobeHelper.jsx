/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { useSpring, animated } from "@react-spring/three";


export function GlobeMeshPlain() {
  const meshRef = useRef();

    const { scale } = useSpring({
      from: { scale: 0 },
      to: { scale: 1 },
      delay: 700,
      config: { duration: 1000 }
    });
  
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
  });

  return (

    <animated.mesh scale={scale} ref={meshRef}>
       <mesh ref={meshRef}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshStandardMaterial roughness={0.6} metalness={0.0} />
      </mesh>
    </animated.mesh>
    
  
  );
}

export function GlobeMeshWithTexture({ textureURL }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, textureURL);


    const { scale } = useSpring({
      from: { scale: 0 },
      to: { scale: 1 },
      delay: 700,
      config: { duration: 1000 }
    });
  

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.01;
  });

  return (
  
    <animated.mesh ref={meshRef} scale={scale}>
       <mesh ref={meshRef}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.0} />
      </mesh>
    </animated.mesh>
    
    
  );
}