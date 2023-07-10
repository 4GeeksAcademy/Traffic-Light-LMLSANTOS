import React, {useEffect, useState} from "react";
import Light from "./light.jsx";

const TrafficLight = () => {

    const Lights = {
        Red: "red",
        Yellow: "yellow",
        Green: "green",
    };

    const [lightOn, setLightOn] = useState(null);
    const [isCycling, setIsCycling] = useState(false);
    
    
    const turnOnNextLight = ()=> {
    
        if(lightOn === Lights.Green){
            setLightOn(Lights.Yellow);
            return;
        }
        if(lightOn === Lights.Yellow){
            setLightOn(Lights.Red);
            return;
        }
        if(lightOn === Lights.Red){
            setLightOn(Lights.Green);
            return;
        }
    };

   useEffect (()=>{
        let interval;

        if (isCycling) {
            interval = setInterval(()=> {
                turnOnNextLight();
            },2000);
        }
        
        return () => {
            return clearInterval(interval);
        };
    },[isCycling,lightOn]);

    const handleLightClick = () => {
        setLightOn((prevLight) => {
          if (prevLight === Lights.Green) {
            return Lights.Yellow;
          } else if (prevLight === Lights.Yellow) {
            return Lights.Red;
          } else {
            return Lights.Green;
          }
        });
      };

      const handleCycleButtonClick = () => {
        setIsCycling((prevIsCycling) => !prevIsCycling);
      };

    return(
        <div>
            <div className="support">

            </div>
            <div className="traffic-light">
                <Light 
                    color={Lights.Red} 
                    isOn={lightOn === Lights.Red} 
                    onClick={handleLightClick}
                />
                <Light 
                    color={Lights.Yellow} 
                    isOn={lightOn === Lights.Yellow} 
                    onClick={handleLightClick}
                />
                <Light 
                    color={Lights.Green} 
                    isOn={lightOn === Lights.Green} 
                    onClick={handleLightClick}
                />  
            </div>
            <button onClick={handleCycleButtonClick} 
            className= {isCycling ? "stop-cycling": "start-cycling"}>
                {isCycling ? "Stop Cycling": "Start Cycling"}
            </button> 
        </div>
    );
}

export default TrafficLight;