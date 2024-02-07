import React from "react";
import "./Hero.css"
import Btc from "./images/bitcoin.e146d46fb598ae0d8f43.png"
import Eth from "./images/ethereum.c6cffe78f0c6abc85da9.png"

const Hero = () => {
  return (
    <div className="container-main md:flex">
      <img className="btc-float md:flex-1" src={Btc} alt = "floating elmt" />
      <span id = 
      "hero1"className="Hero-span font-bold text-7xl text-white p-4">Track and Trade</span>
      <span id = 
      "hero2"className="Hero-span font-bold text-7xl bg-gradient-to-r from-purple-600 to-pink-600 p-4 inline-block text-transparent bg-clip-text">Crypto Currencies</span>
      <img className="eth-float" src={Eth} alt = "floating elmt" />
    </div>
  );
};

export default Hero;
