import React from 'react'
import "./Filter.css"
import{faAngleDown,faSliders} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Filter() {
  return (
    <div>
        <section className='hero'>
            <button className="button-60" role="button">Price &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button> &nbsp;
            <button className="button-60" role="button">Language offered &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button> &nbsp;
            <button className="button-60 " role="button">Time of day &nbsp; <FontAwesomeIcon icon={faAngleDown}  /></button>  <span className='verticalLine'></span>
            <button className="button-60" role="button">Art and culture</button>&nbsp;
            <button className="button-60" role="button">Entertainment</button>&nbsp;
            <button className="button-60" role="button">Food and drink</button>&nbsp;
            <button className="button-60" role="button">Sports</button>&nbsp;
            <button className="button-60" role="button">Tours</button>&nbsp;
            <button className="button-60" role="button">Sightseeing</button>&nbsp;
            <button className="button-60" role="button">Wellness</button>&nbsp;
            <button className="button-60" role="button">Nature and outdoors</button>&nbsp;
            <button className="button-60" role="button"><FontAwesomeIcon icon={faSliders}  /> &nbsp; Filters</button>&nbsp;
        </section>
    </div>

  )
}
