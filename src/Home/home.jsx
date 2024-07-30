import React, { useEffect, useState ,lazy, Suspense} from 'react';
import axios from "axios"
import { server } from "../constants/config"
import styles from "./home.module.css"

const Carousel  = lazy(() => import('../Carousel/carousel'))

function Home(){
    const [dataList, setDataList] = useState([]);
    const [count, setCount] = useState(0);
    const [margin, setMargin] = useState("100%");
    const [forward, setForward] = useState(true);

    const getData = async(req, res, next) =>{
        try {
          const {data} = await axios.get(`${server}/api/v1/kukudata`)
          setDataList(data.data);
        } catch (error) {
          
        }
      }
      useEffect(() =>{
        getData();
      },[])


      function shiftImage(count){
        switch(count){
          case 0:
            setMargin("0%");
            break;
          case 1:
            setMargin("-100%");
            break;
          case 2:
            setMargin("-201%");
            break;
          case 3:
            setMargin("-302%");
            break;
          case 4:
            setMargin("-403%");
            break;
          default:
            break;    

        }
      }

      if(forward){
        for(let i = 0; i<5; i++){
          setTimeout(() => {
            if(count === 4){
              setCount(0);
              shiftImage(count);
            }else{
              setCount(count+1);
              shiftImage(count);
            }
          }, 2000)
          console.log(count)
        }
      }
      
    return (
        <div className={styles.allCards} style={{marginLeft:margin}}>
           {dataList.map((data, key) =>(
            
            <Suspense fallback={<div><h1>Loading...</h1></div>}>
              <Carousel data={data}/>
            </Suspense>

           ))}
        </div>
    )
}

export default Home

