// import React from 'react'
import './style/cardStyle.css'

type cardprops={
    imgsrc:string
    topic:string,
    description:string,
}
const Card = (props:cardprops) => {
  return (
    <div className='cardContainer'>
      <img src={props.imgsrc} alt="" />
      <h1 className='heading'>{props.topic}</h1>
      <p>{props.description}</p>
      <button className='button'>more</button>
    </div>
  )
}

export default Card
