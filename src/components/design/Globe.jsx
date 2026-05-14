/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { motion } from "motion/react";

export default function Globe({classname = ""}){

    const containerdRef = useRef(null)
    const renderedRef = useRef(null)
    const animationRef = useRef(null)


    // ref buat click bulan
    const isLight = useRef(false)

  
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
        container.appendChild(renderer.domElement)
        renderedRef.current = renderer
        


        const geometry = new THREE.SphereGeometry(30, 24, 24)
        const material = new THREE.MeshStandardMaterial({
            color: 0x4e9df2,
            wireframe: true
        })
        const bulet = new THREE.Mesh(geometry, material)
        scene.add(bulet)

      

        const light = new THREE.PointLight(0xffffff, 300)
        light.position.set(15, 10, 30)
        scene.add(light)

        // comment aja kalau gamau lebih terang
        const sunLight = new THREE.DirectionalLight(0xffffff, 1)
        sunLight.position.set(20, 10, 10)
        scene.add(sunLight)


  


        camera.position.set(0, 0, 60)
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.update()

        // biar doi gabisa di zoom ini
        controls.enableZoom = false

        // kalo ini biar dia tuh gabisa di puter2 ke atas bawah, horizon doank
        controls.minPolarAngle = Math.PI / 2
        controls.maxPolarAngle = Math.PI / 2

        // ini biar ga ngasih rotation.y += 0.1 di animate
        controls.autoRotate = true
        controls.autoRotateSpeed = 7
        
        controls.enablePan = false

        const observer = new ResizeObserver((entries) => {
            const { contentRect } = entries[0]
            const { width, height } = contentRect
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()   
        })
        observer.observe(container)

        const animate = () => {
            animationRef.current = requestAnimationFrame(animate)
            controls.update()
            // bulet.rotation.y += 0.009

            const target = isLight.current ? false : true
            material.wireframe = target
        
            
            renderer.render(scene, camera)
        }
        animate()

        return () => {
            material.dispose();
            geometry.dispose();
            controls.dispose();
            renderer.forceContextLoss();
            renderer.dispose()
            cancelAnimationFrame(animationRef.current)
            observer.disconnect()           
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement)
            }
        }
        
    }, [])
    

    return <motion.div 
    initial={{scale: 0}} 
    animate={{scale: 1}} 
    transition={{ duration: 1, delay: 0.7, ease: "easeIn" }} 
    ref={containerdRef} 
    className={`rounded-full z-0 ${classname}`}
    onClick={() => {
        isLight.current = !isLight.current
    }} >

    </motion.div>
}