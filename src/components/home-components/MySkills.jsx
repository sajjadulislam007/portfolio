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
            <h2>Skillset</h2>
        </div>
    );
};

export default MySkills;
