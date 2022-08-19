import React from "react";
import Icons from "../../icons";
import SkillsBG from "../../images/card-bg/skill-bg.svg";
//Styles
import "../../styles/homeComponentCss/_mySkills.scss";
import AnimatedBtn from "../AnimatedBtn";

const MySkills = ({ buttonCollapse }) => {
    return (
        <div className="skills">
            <div className="media">
                <img src={SkillsBG} alt="SkillsBG" />
            </div>
            <div className="gradient-bg">
                <h2>Skills & Abilities</h2>
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
        </div>
    );
};

export default MySkills;
