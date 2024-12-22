import React from 'react'
import styles from "./Mobile.module.css"
import propType from "prop-types"



const Mobile = ({Name, desc, imgSrc, price}) => {

  return (
    
    <div className={styles.parent}>
        
        <div>
            <span>New</span>
            <h2>{Name}</h2>
            <h3>{desc}</h3>
            <br />
            <h4>{"Rs."+ price}</h4>
        </div>
      <div>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  )
}

Mobile.propType = {
  Name: propType.string,
  desc: propType.string,
  price: propType.string,
  imgSrc: propType.string,
}



export default Mobile
