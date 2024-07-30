import { useEffect, useState } from "react";
import axios from "axios"
import { server } from "../constants/config";
import styles from "./vipshows.module.css"
import LazyImageLoader from "../LazyImageLoading";

function Vipshows(){
    const [vipShows, setvipShows] = useState([]);
    const getData = async(req, res, next) =>{
        try {
          const {data} = await axios.get(`${server}/api/v1/kukudata/vipshows`)
          setvipShows(data.data);
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() =>{
        getData();
      },[])

    return(
        <div className={styles.outterDiv}>
            <h3>VIP Shows &gt;</h3>
            <div className={styles.allVipshows}>
                {vipShows.map((data, key) =>(
                    <div className={styles.container}>
                    <LazyImageLoader className={styles.allImg} src={data.image} alt="not found"/>
                    <h3>{data.title}</h3>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Vipshows