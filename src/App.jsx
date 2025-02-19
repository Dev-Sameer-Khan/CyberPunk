import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Environment } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import * as THREE from "three";

const App = () => {
  return (
    <section className="overflow-hidden">
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
      <div className="w-full h-screen overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen filter contrast-125 saturate-150">
        <nav className="fixed -top-5 px-12 text-white w-full flex items-center justify-between">
          <div className="logo w-[15%]">
            <img
              src="https://preview.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=640&crop=smart&auto=webp&s=8c31445d1ee6f6993331b7d7d11bad170086631c"
              alt=""
            />
          </div>
          <div className="links flex gap-8">
            <h5 className="text-white hover:text-blue-400 transition-all duration-300 hover:[text-shadow:_0_0_20px_#60affa] cursor-pointer">
              Games
            </h5>
            <h5 className="text-white hover:text-blue-400 transition-all duration-300 hover:[text-shadow:_0_0_20px_#60affa] cursor-pointer">
              News
            </h5>
            <h5 className="text-white hover:text-blue-400 transition-all duration-300 hover:[text-shadow:_0_0_20px_#60affa] cursor-pointer">
              Community
            </h5>
            <h5 className="text-white hover:text-blue-400 transition-all duration-300 hover:[text-shadow:_0_0_20px_#60affa] cursor-pointer">
              Shop
            </h5>
            <h5 className="text-white hover:text-blue-400 transition-all duration-300 hover:[text-shadow:_0_0_20px_#60affa] cursor-pointer">
              Support
            </h5>
          </div>
        </nav>
        <img
          className="w-[60%] absolute top-[25%] left-1/2 -translate-x-1/2"
          src="https://preview.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=640&crop=smart&auto=webp&s=8c31445d1ee6f6993331b7d7d11bad170086631c"
          alt=""
        />
      </div>
    </section>
  );
};

export default App;
