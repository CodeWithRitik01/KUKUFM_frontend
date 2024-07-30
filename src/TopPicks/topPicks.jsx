import { useState, useEffect } from "react";
import { server } from "../constants/config";
import axios from "axios";
import styles from "./topPicks.module.css"
import LazyImageLoader from "../LazyImageLoading";

function TopPicks(){
    const [topPicks, setTopPicks] = useState([]);
    const getData = async(req, res, next) =>{
        try {
          const {data} = await axios.get(`${server}/api/v1/kukudata/toppicks`)
          setTopPicks(data.data);
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() =>{
        getData();
      },[])

    return(
        <div className={styles.allItems}>
            {topPicks.map((data, key) =>(
                <div className={styles.containerDiv}>
                    <LazyImageLoader src={data.icon}/>
                    <h4>{data.title}</h4>
                </div>
            ))}
        </div>
    )
}

export default TopPicks