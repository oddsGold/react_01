import React from "react";
import Header from "../sections/Header";
import LeftNavbar from "../sections/LeftNavbar";

const Wrapper = (props) => {
    return(
        <div className="wrapper">
            <div className="container">
                <Header/>

                <div className="wrapper-row">

                    <LeftNavbar/>

                    <div className="content">
                        { props.children }
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Wrapper;