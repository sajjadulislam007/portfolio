import React from "react";
import Icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_toggleSwitch.scss";
const ModeSwitch = () => {
    return (
        <div className="card">
            <div className="wrapper-label">
                <label>
                    <input className="toggle-checkbox" type="checkbox"></input>
                    <div className="toggle-slot">
                        <div className="sun-icon-wrapper">
                            <div className="iconify sun-icon">{Icons.sun}</div>
                        </div>
                        <div className="toggle-button"></div>
                        <div className="moon-icon-wrapper">
                            <div className="iconify moon-icon">{Icons.moon}</div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default ModeSwitch;
