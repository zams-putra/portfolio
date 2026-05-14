 
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// GlobeTemplate.jsx - pakai R3F
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { motion } from 'motion/react';
import { GlobeMeshPlain, GlobeMeshWithTexture } from './design-helper/GlobeHelper';

export default function GlobeTemplate({ classname = "", textureURL = null }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
      className={`rounded-full z-0 ${classname}`}
    >
      <Canvas
        camera={{ position: [0, 0, 60], fov: 75 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
      >
        <directionalLight intensity={1.5} position={[5, 3, 5]} />
        <ambientLight intensity={0.3} />
        <hemisphereLight args={[0xffffff, 0x444444, 0.4]} />
        <Suspense fallback={null}>
          <GlobeMesh textureURL={textureURL} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableDamping />
      </Canvas>
    </motion.div>
  );
}


function GlobeMesh({ textureURL }) {
  return textureURL
    ? <GlobeMeshWithTexture textureURL={textureURL} />
    : <GlobeMeshPlain />;
}




