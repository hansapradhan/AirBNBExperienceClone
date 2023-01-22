import React from 'react'
import "./Navbar.css"
import{faUserCircle,faBars} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Globe} from "react-feather";
import Container from 'react-bootstrap/Container';


export default function Navbar() {
  return (
    <nav > 
      {/* Alternatively you can use from:https://www.vectorlogo.zone/logos/airbnb/airbnb-ar21.svg */}
      <div >
        <img id='NavbarImage'   layout="fill" objectFit="contain" objectPosition="left" src={`../../images/Airbnb.png`} alt="Airbnb" />
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div >
        <button class="button-81" role="button">Airbnb your home</button>
        <button class="button-81" role="button"> <Globe className="globe" /></button>
        <button class="button-35" role="button"> <FontAwesomeIcon icon={faBars}  />  &nbsp; &nbsp;<FontAwesomeIcon icon={faUserCircle} /></button>
      </div>
      <hr />
    </nav>
  //   <Navbar>
  //     <Container>
  //     <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  //     <Navbar.Toggle />
  //     <Navbar.Collapse className="justify-content-end">
  //       <Navbar.Text>
  //         Signed in as: <a href="#login">Mark Otto</a>
  //       </Navbar.Text>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  )
}
