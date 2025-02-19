import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { Environment } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import * as THREE from "three";
import TextPressure from "./components/TextPressure";
import DecryptedText from "./components/DecryptedText";
import Particles from "./components/Particles";
import Crosshair from "./components/Crosshair";

const App = () => {
  return (
    <>
      <Crosshair />
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
          <nav className="fixed top-0 px-12 py-2 text-white w-full flex items-center justify-between z-[99999999]">
            <div className="logo">
              <DecryptedText text={"Lazy Codwr"} />
            </div>
            <div className="links flex gap-8">
              {["Games", "News", "Community", "Support"].map((elem, idx) => (
                <DecryptedText key={idx} text={elem} />
              ))}
            </div>
          </nav>
          <Particles />
          <TextPressure />
          {/* <h1 className="text-[7vw] font-bold whitespace-nowrap text-blue-600 absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">Sameer Khan</h1> */}
        </div>
      </section>
    </>
  );
};

export default App;
