import { useEffect, useState } from "react";
import axios from "axios"
import { server } from "../constants/config";
import styles from "./topten.module.css"
import LazyImageLoader from "../LazyImageLoading";

function Topten(){
    const [topTen, setTopTen] = useState([]);
    const getData = async(req, res, next) =>{
        try {
          const {data} = await axios.get(`${server}/api/v1/kukudata/topten`)
          setTopTen(data.data);
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() =>{
        getData();
      },[])

    return(
        <div className={styles.outterDiv}>
            <h3>Top 10 in India</h3>
            <div className={styles.allTopTen}>
                {topTen.map((data, key) =>(
                   
                        <LazyImageLoader className={styles.allImg} src={data.image} alt="not found"/>
                   
                ))}

            </div>

        </div>
    )
}

export default Topten