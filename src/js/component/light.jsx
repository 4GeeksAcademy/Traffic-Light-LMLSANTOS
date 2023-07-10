import React from "react";

const Light = ({color, isOn, onClick}) => {
    const lightClass = `light ${color}-light ${isOn ? "on" : ""}`;

        return (
            <div className="light-wrapper">
                <div className={lightClass} onClick={onClick}></div>
            </div>
        );
}

export default Light;