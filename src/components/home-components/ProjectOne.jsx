import React from "react";
import BGFour from "../../images/card-bg/card-bg-4.svg";
import CWMM from "../../images/card-bg/cwmm-bg.svg";
import AnimatedBtn from "../AnimatedBtn";
import icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_projectOne.scss";

const ProjectOne = ({ buttonCollapse }) => {
    return (
        <div className="card projectOne">
            <div className="media">
                <img className="imgOne" src={BGFour} alt="background" />
                <img className="imgTwo" src={CWMM} alt="project One" />
            </div>
            <AnimatedBtn
                width={{
                    width: !buttonCollapse ? "36px" : "110px",
                }}
                buttonCollapse={buttonCollapse}
                title="CWMM"
                icons={icons.arrow_up}
                link="#"
            />
        </div>
    );
};

export default ProjectOne;
