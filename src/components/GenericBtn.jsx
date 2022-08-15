import React from "react";
const GenericBtn = ({ icons, title, actionFunction }) => {
    return (
        <button
            className="btn withIcon"
            onClick={actionFunction ? actionFunction : null}
        >
            {icons}
            <span>{title}</span>
        </button>
    );
};

export default GenericBtn;
