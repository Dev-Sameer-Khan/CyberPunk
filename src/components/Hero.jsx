import React from "react";
import TextPressure from "./TextPressure";
import DecryptedText from "./DecryptedText";
import Particles from "./Particles";

const Hero = () => {
  return (
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
  );
};

export default Hero;
