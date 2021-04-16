import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./particle-config"
import '../Header/Header.css'

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig} className='particles'></Particles>
    );
}