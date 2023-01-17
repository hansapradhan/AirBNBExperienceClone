import React from 'react'
import Airbnb from "../../images/Airbnb.png"  
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <img id='NavbarImage' src={Airbnb} alt="Airbnb" />
    </nav>
  )
}
