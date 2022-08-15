import React from "react";

const AnimatedBtn = ({ buttonCollapse, icons, title, link, width }) => {
    return (
        <a href={link} className="btn withIcon collapes" style={width}>
            {title ? (
                <span
                    style={{
                        opacity: !buttonCollapse && !buttonCollapse ? "0" : 1,
                        transform:
                            !buttonCollapse && !buttonCollapse
                                ? "translateX(-12px) translateZ(0px)"
                                : "none",
                    }}
                >
                    {title}
                </span>
            ) : (
                ""
            )}
            <div className="arrow-up">{icons}</div>
        </a>
    );
};

export default AnimatedBtn;
