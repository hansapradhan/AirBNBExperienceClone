import React from 'react'
import "./Filter.css"
import{faAngleDown,faSliders} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Filter() {
  return (
    <div>
        <section className='filter'>
            <button className="button-60" >Price &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button> &nbsp;
            <button className="button-60" >Language offered &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button> &nbsp;
            <button className="button-60 " >Time of day &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button>  <span className='verticalLine'></span>
            <button className="button-60" >Art and culture</button>&nbsp;
            <button className="button-60" >Entertainment</button>&nbsp;
            <button className="button-60" >Food and drink</button>&nbsp;
            <button className="button-60" >Sports</button>&nbsp;
            <button className="button-60" >Tours</button>&nbsp;
            <button className="button-60" >Sightseeing</button>&nbsp;
            <button className="button-60" >Wellness</button>&nbsp;
            <button className="button-60" >Nature and outdoors</button>&nbsp;
            <button className="button-60" ><FontAwesomeIcon icon={faSliders}  /> &nbsp; Filters</button>&nbsp;
        </section>
    </div>

  )
}
