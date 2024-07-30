import styles from "./navbar.module.css"
import LazyImageLoader from "../LazyImageLoading"
import Sidebar from "../Sidebar/sidebar"
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    const languages = ["Hindi", "Marathi", "Bangla", "Telugu", "Tamil", "Malayalam", "Kannada","English"]
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    return(
        <div className={styles.main}>
            <LazyImageLoader onClick={() => setIsOverlayOpen(true)} className={`${styles.menu} ${styles.otherNav}`} src="https://cdn-icons-png.flaticon.com/128/4204/4204600.png" alt="not found"/>
            <Sidebar isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(false)}>
             <h1>This is an overlay content</h1>
            </Sidebar>
            <NavLink>
              <LazyImageLoader className={`${styles.logo} ${styles.otherNav}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzm77sALhnUKUt6fD6P8q1kQqvOxykOxfH6FogWxm4HpY_e_Ccrogwd2kFGKNhVM29no&usqp=CAU" alt="not found"/>
            </NavLink>

            <input className={styles.navInput} type="text" placeholder="Search audiobook & stories"/>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Languages</button>
              <LazyImageLoader className={styles.dropdownImg} alt="not found" src="https://cdn-icons-png.flaticon.com/128/8213/8213476.png"/>
              <p className={styles.chosenLang}>{languages[0]}</p>
                <div className={styles.dropdownContent}>
                    <p>Tap to choose audio languages</p>
                    {languages.map((lang, key) =>(
                    <div>
                        <input type="checkbox" value={lang}/>
                        <label>{lang}</label><br></br>
                    </div>
                    ))}
                    <button className={styles.applyButton}>Apply</button>
                </div>
            </div>
            <NavLink to="dummy">
            <h4 className={`${styles.otherNav} ${styles.mobView}`}>Get Free Trial</h4>
            </NavLink>
            <NavLink to="dummy">
              <h4 className={`${styles.otherNav} ${styles.mobView}`}>Buy coins</h4>
            </NavLink>
            <NavLink to="dummy">
              <h4 className={`${styles.otherNav} ${styles.mobView}`}>Login/Signup</h4>
            </NavLink>
            <NavLink to="https://play.google.com/store/apps/details?gl=US&hl=en_IN&id=com.vlv.aravali&referrer=singular_click_id%3D78cb5c1a-6cc7-4832-82ba-58236215c6c7">
            <LazyImageLoader className={`${styles.downloadBtn} ${styles.otherNav}`} src="https://cdn-icons-png.flaticon.com/128/7268/7268609.png" alt="not found"/>
            </NavLink>
        </div>
    )
}

export default Navbar