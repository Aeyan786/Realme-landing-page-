import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
            <ul>
                <li><strong>Recommended</strong></li>
                <li>realme C75</li>
                <li>realme C61</li>
                <li>realme Note 60</li>
                <li>realme 12</li>
                <li>realme 12 + 5G</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><strong>Support</strong></li>
                <li>FAQ</li>
                <li>TroubleShooting</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><strong>About</strong></li>
                <li>Our Brand</li>
                <li>Newsroom</li>
            </ul>
        </div>
        <div>
            <span>04238048018</span>
            <p>09:30 - 18:00, MON - SAT <br />
            Exclude Holidays</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
