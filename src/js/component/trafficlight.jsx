import React, {useEffect, useState} from "react";
import Light from "./light.jsx";

const TrafficLight = () => {

    const [lightOn, setLightOn] = useState(null);
    const [isCycling, setIsCycling] = useState(false);
    const [purpleOn, setPurpleOn] = useState(false);
   
    useEffect (()=>{
        if (isCycling) {
            setTimeout(()=>{
                handleLightClick();
            }, 2000)
        }
    },[isCycling,lightOn]);

    
    const handleLightClick = () => {
        if(lightOn === "red") { 
            setLightOn("yellow");
        } else if (lightOn === "yellow") {
            setLightOn("green");
        } else if (purpleOn && lightOn === "green"){
            setLightOn("purple");
        } else {
            setLightOn("red");
        } 
    }

    return(
        <div>
            <div className="support">

            </div>
            <div className="traffic-light">
                <Light 
                    color="red"
                    isOn={lightOn === "red"} 
                    changeColor={setLightOn}
                />
                <Light 
                    color= "yellow" 
                    isOn={lightOn === "yellow"} 
                    changeColor={setLightOn}
                />
                <Light 
                    color="green"
                    isOn={lightOn === "green"} 
                    changeColor={setLightOn}
                /> 
            {purpleOn && 
                <Light 
                    color="purple"
                    isOn={lightOn === "purple"} 
                    changeColor={setLightOn}
                /> 
            }
            </div>
            <button onClick={() => {
                handleLightClick();
                setIsCycling(!isCycling)} 
            }
                className= {isCycling ? "stop-cycling": "start-cycling"}>
                {isCycling ? "Stop Cycling": "Start Cycling"}
            </button>
            <div>
                <button onClick={() => setPurpleOn(!purpleOn)}
                    className= {purpleOn ? "stop-cycling": "start-cycling"}>
                    {purpleOn? "turn-off-purple": "turn-on-purple"}
                </button> 
            </div> 
        </div>
        
    );
}

export default TrafficLight;