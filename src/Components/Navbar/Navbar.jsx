import React from 'react'
import logo from "../../assets/download.svg"
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <>
    <div className={styles.main}>
         <div className={styles.child}><a href=""><img src={logo} alt="" /></a>
         <ul className={styles.ul}>
            <li><a href="#">realme Smartphone</a></li>
            <li><a href="#">narzo Smartphone</a></li>
            <li><a href="#">Audio</a></li>
            <li><a href="#">Accesseries</a></li>
         </ul>
         
         </div>
         <div className={styles.secondchild}>
            <ul className={styles.ul}>
            <li><a href="#">Brand</a></li>
            <li><a href="">Support</a></li>
            <li><a href="">Community</a></li>
            </ul>
         </div>
    </div>

    </>  )
}

export default Navbar