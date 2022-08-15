import React from "react";
import BGOne from "../../images/card-bg/card-bg-1.svg";
import SB from "../../images/card-bg/sb.svg";
import AnimatedBtn from "../AnimatedBtn";
import icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_projectOne.scss";

const ProjectTwo = ({ buttonCollapse }) => {
    return (
        <div className="card projectTwo">
            <div className="media">
                <img className="imgOne" src={BGOne} alt="background" />
                <img className="imgTwo" src={SB} alt="project Two" />
            </div>
            <AnimatedBtn
                width={{
                    width: !buttonCollapse ? "36px" : "80px",
                }}
                buttonCollapse={buttonCollapse}
                title="SBE"
                icons={icons.arrow_up}
                link="#"
            />
        </div>
    );
};

export default ProjectTwo;
