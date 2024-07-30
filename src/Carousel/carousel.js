import React from 'react';
import styles from "./carousel.module.css"

function Carousel(prop){

    const {data} = prop;
    return (
        <div className={styles.outerDiv}> 
            <img className={styles.cardImg} src={data.image} alt='not found'/>
            <span className={styles.cardTitle}>
                <img className={styles.playImg} src='https://cdn-icons-png.flaticon.com/128/5495/5495002.png'/>
            </span>
        </div>
    )
}

export default Carousel