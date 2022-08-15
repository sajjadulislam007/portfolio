import React from "react";
import BGThree from "../../images/card-bg/card-bg-3.svg";
import WPPOOL from "../../images/card-bg/wppool.svg";
import AnimatedBtn from "../AnimatedBtn";
import icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_projectOne.scss";

const ProjectThree = ({ buttonCollapse }) => {
    return (
        <div className="card projectThree">
            <div className="media">
                <img className="imgOne" src={BGThree} alt="background" />
                <img className="imgTwo" src={WPPOOL} alt="project Three" />
            </div>
            <AnimatedBtn
                width={{
                    width: !buttonCollapse ? "36px" : "120px",
                }}
                buttonCollapse={buttonCollapse}
                title="WPPOOL"
                icons={icons.arrow_up}
                link="#"
            />
        </div>
    );
};

export default ProjectThree;
