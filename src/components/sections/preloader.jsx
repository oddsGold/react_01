import React from "react";
import preloader from "../../assets/img/Spinner-1s-297px.svg";

let Preloader = (props) => {
    return(
        <div className="preloader">
            <img src={preloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader;