import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Environment } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import * as THREE from "three";

const Canvass = () => {
  return (
    <Canvas
      camera={{ fov: "30" }}
      style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}
      gl={{
        toneMapping: ACESFilmicToneMapping, // Apply ACES tone mapping
        outputEncoding: THREE.sRGBEncoding,
        toneMappingExposure: 1,
      }}
    >
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr" />
      <ambientLight e />
      <Scene />
    </Canvas>
  );
};

export default Canvass;
