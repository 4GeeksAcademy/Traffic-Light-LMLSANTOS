import React from "react";

const Light = ({color, isOn, changeColor}) => {
    const lightClass = `light ${color}-light ${isOn ? "on" : ""}`;

        return (
            <div className="light-wrapper">
                <div className={lightClass} onClick={() => changeColor(color)}></div>
            </div> 
        );
}

export default Light;