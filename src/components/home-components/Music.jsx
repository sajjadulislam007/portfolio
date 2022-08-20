import React from "react";
import Icons from "../../icons";

//styles
import "../../styles/homeComponentCss/_music.scss";

const Music = () => {
    return (
        <div className="card music">
            <div className="content">
                <div className="media">{Icons.spotify}</div>
                <div className="bottomContent">
                    <div className="eco">
                        <div className="equalizer">
                            <span className="eq1"></span>
                            <span className="eq2"></span>
                            <span className="eq3"></span>
                            <span className="eq4"></span>
                        </div>
                        <p>Offline. Last played</p>
                    </div>
                    <a
                        href="https://open.spotify.com/track/3OOFEF20WqtsUPcRbPY3L7?si=bdf4ac57167e437f&nd=1"
                        target="_blank"
                        className="song"
                    >
                        <h6>Short Skirt / Long Jacket</h6>
                    </a>
                    <p className="album">Cake - Comfort Eagle</p>
                </div>
            </div>
        </div>
    );
};

export default Music;
