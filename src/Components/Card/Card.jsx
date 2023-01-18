import React from 'react'
import "./Card.css"

export default function Card(props) {
 console.log(props)

  return (
    <section>
            <div className="card" >
                <img src={`../../images/${props.img}`} className="card-img-top CardImage" alt="Katie's Image" />
                <div className="card-body">
                    <div className="CardStats">
                        <img src={`../../images/Star.png`} className="StarImage" />
                        <span className='Grey'>{props.rating}</span>
                        <span className='Grey'>({props.reviewCount}) • </span>
                        <span className='Grey'>{props.country}</span>
                    </div>
                    <br />
                    <p className="card-text">{props.title}</p>
                    <p className="card-text"> <b>From ${props.price}</b>  / person</p>
                </div>
            </div>
    </section>
  )
}
