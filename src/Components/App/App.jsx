import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./App.module.css"
import Mobile from "../MobileCards/Mobile.jsx"
import Footer from "../Footer/Footer.jsx"
import {Data} from "../../Data.jsx"
import {Accessories} from '../../Accessories.jsx';


const App = () => {
  return (
    <>

      <Navbar />

    <div className={styles.cover}></div>

    <br />

    <h1  className={styles.heading1}>SmartPhones</h1>

    <br />

    <div className={styles.mobCards}>

      {Data && Data.map((e,i)=>{
        
        return(
           <div key={i}>
         <Mobile Name={e.Name} desc={e.desc} imgSrc={e.imgSrc}  price={e.price} />
        </div>)

      })}

    </div>

      <br />
      <h1  className={styles.heading1}>Accessories</h1>
      <br />

      <div className={styles.mobCards}>    
        
 
        
    {Accessories? Accessories.map((e,i)=>{
        
        return(
           <div key={i}>
         <Mobile Name={e.AccName} desc={e.Accdesc} imgSrc={e.AccimgSrc}  price={e.Accprice} />
        </div>)

      }): <h1>Not found</h1>}

      </div>

      <br />
      <br />

    <Footer />
 </>
  )
}

export default App