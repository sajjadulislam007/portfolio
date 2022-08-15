import React, { useState } from "react";
import Smile from "../../images/avater/smile.png";
import Fear from "../../images/avater/fear.png";
import GenericBtn from "../GenericBtn";
import icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_intro.scss";

const Intro = () => {
    const [toogleImage, setToggleImage] = useState(true);

    const handleToggleImage = () => {
        setToggleImage((prevState) => !prevState);
    };

    return (
        <div className="intro-card card">
            <div className="float">
                <div className={`media ${toogleImage ? "smile" : "fear"}`}>
                    <img src={toogleImage ? Smile : Fear} alt="smile face" />
                    <div className={`shadow`}></div>
                </div>
            </div>
            <p>
                Hi There, I am <span>Md Sajjadul Islam</span>, a front-end
                developer from Dhaka, Bangladesh. I'm interested in JavaScript,
                React, Node, Python, Cryptocurrencies, Travel and Music.
            </p>
            <GenericBtn
                icons={icons.arrow_rotate}
                title="Toggle Lockdown"
                actionFunction={handleToggleImage}
            />
        </div>
    );
};

export default Intro;
