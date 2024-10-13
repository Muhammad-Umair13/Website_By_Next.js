import React from 'react';
import Components_style from "../app/components.module.css";

export const Hero = () => {
  return (
    <section className={Components_style.hero_sec}>
        <h1>This is Hero Section</h1>
        <p>My name is Muhammad Umair and I am a student of IT (Information Technology)</p>
    </section>
  )
}

export default Hero;