// import React from 'react'
 type footersectionporps={
    brand:string,
    count:number
 }
const FooterSection = (props:footersectionporps) => {
  return (
    <div>
      <p className='footerSection'>Footer{props.brand}</p>
      <h1>{props.count}</h1>
    </div>
  )
}

export default FooterSection
