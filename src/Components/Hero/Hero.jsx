import React from 'react'
import "./Hero.css"
// import HeroImage from "../../images/HeroPage.png"  

export default function Hero() {
  return (
    <section className='hero'>
        <img className="HeroImage" src={`../../images/HeroPage.png`} alt="HeroImage" />
        <h1 className='HeroHeader'>Online Experiences</h1>
        <p className='HeroParagraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </section>
  )
}
