import React from 'react'
import "./Navbar.css"
import{faUserCircle,faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Globe} from "react-feather";


export default function Navbar() {
  return (
    <nav > 
      {/* Alternatively you can use from:https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg */}
      <div >
        <img id='NavbarImage'   layout="fill" objectFit="contain" objectPosition="left" src={`../../images/Airbnb.png`} alt="Airbnb" />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div >
        <button class="button-81" role="button">Airbnb your home</button>
        <button class="button-81" role="button"> <Globe className="globe" /></button>
        <button class="button-35" role="button"> <FontAwesomeIcon icon={faBars} /><FontAwesomeIcon icon={faUserCircle} /></button>
      </div>
      <hr />
    </nav>
  )
}
