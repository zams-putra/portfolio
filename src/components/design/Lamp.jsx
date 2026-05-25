/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { motion } from "motion/react";

export default function Lamp({classname = ""}){

    const containerdRef = useRef(null)
    const renderedRef = useRef(null)
    const animationRef = useRef(null)


    const isLight = useRef(false)


    const materialRef = useRef(null)
    const pointLightRef = useRef(null)
    const ambientRef = useRef(null)



    useEffect(() => {
        const container = containerdRef.current

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "low-power"
        });


        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 0.6  
        
        container.appendChild(renderer.domElement)
        renderedRef.current = renderer
        


        const geometry = new THREE.SphereGeometry(30, 24, 24)
        const material = new THREE.MeshStandardMaterial({
            color: 0xfcff57,
            emissive: 0xfcff57,
            emissiveIntensity: 0, 
            roughness: 0.5,
            metalness: 0.0,
        })
        materialRef.current = material
        const bulet = new THREE.Mesh(geometry, material)
        scene.add(bulet)

    

        const ambient = new THREE.AmbientLight(0xffffff, 0.15)
        scene.add(ambient)
        ambientRef.current = ambient


        const pointLight = new THREE.PointLight(0xfcff57, 0, 200)  
        pointLight.position.set(0, 0, 40)
        scene.add(pointLight)
        pointLightRef.current = pointLight


        const rimLight = new THREE.DirectionalLight(0xffffff, 0.3)
        rimLight.position.set(-5, 3, -5)
        scene.add(rimLight)




        camera.position.set(0, 0, 60)
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.update()


        controls.enableZoom = false

    
        controls.minPolarAngle = Math.PI / 2
        controls.maxPolarAngle = Math.PI / 2


        
        controls.enablePan = false
        
        
        const animate = () => {
            animationRef.current = requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate()
        
        
        const observer = new ResizeObserver((entries) => {
            const { contentRect } = entries[0]
            const { width, height } = contentRect
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()   
        })
        observer.observe(container)

        return () => {
            material.dispose();
            geometry.dispose();
            controls.dispose();
            renderer.forceContextLoss();
            renderer.dispose()
            observer.disconnect()     
            cancelAnimationFrame(animationRef.current) 
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
 
    }, [])
    

        const handleClick = () => {
        isLight.current = !isLight.current
        const on = isLight.current

        const material = materialRef.current
        const pointLight = pointLightRef.current
        const renderer = renderedRef.current

        if (on) {
            material.emissiveIntensity = 0.9  
            pointLight.intensity = 400     
            renderer.toneMappingExposure = 1.2  
        } else {
            material.emissiveIntensity = 0
            pointLight.intensity = 0
            renderer.toneMappingExposure = 0.6
        }
    }
    

    return <motion.div 
    initial={{scale: 0}} 
    animate={{scale: 1}} 
    transition={{ duration: 1, delay: 0.7, ease: "easeIn" }} 
    ref={containerdRef} 
    className={`rounded-full z-0 ${classname}`}
    onClick={handleClick}>

    </motion.div>
}