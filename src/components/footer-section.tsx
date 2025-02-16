import React from 'react'
 type footersectionporps={
    brand:string
 }
const FooterSection = (props:footersectionporps) => {
  return (
    <div>
      <p className='footerSection'>Footer{props.brand}</p>
    </div>
  )
}

export default FooterSection
