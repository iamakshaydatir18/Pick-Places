import { useState,useEffect} from "react";


export default function ProgressBar({timer}){


    const[useTimer, setTimer] = useState(timer);


  useEffect(() =>{

    const interval = setInterval(() =>{
      console.log('INTERVAL');
      setTimer(prev => prev-10)
    },10);


    return () => {
      console.log("CLEARED INTERVAL");
      clearInterval(interval)
    }

  },[]);

  return <progress value={useTimer} max={timer}/>

}