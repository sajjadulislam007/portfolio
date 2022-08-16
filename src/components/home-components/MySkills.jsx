import React from "react";
import Icons from "../../icons";

//Styles
import "../../styles/homeComponentCss/_mySkills.scss";
import AnimatedBtn from "../AnimatedBtn";

const MySkills = ({ buttonCollapse }) => {
    return (
        <div className="skills">
            <AnimatedBtn
                width={{
                    width: !buttonCollapse ? "36px" : "110px",
                }}
                buttonCollapse={buttonCollapse}
                title="Explore"
                icons={Icons.arrow_up}
                link="#"
            />
        </div>
    );
};

export default MySkills;
