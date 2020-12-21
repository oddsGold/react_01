import React from "react";
import Header from "../../sections/Header";
import LeftNavbarContainer from "../../sections/Navbar/LeftNavbarContainer";

function Wrapper(props) {
    return(
        <div className="wrapper">
            <div className="container">
                <Header />

                <div className="wrapper-row">

                    <LeftNavbarContainer />

                    <div className="content">
                        { props.children }
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Wrapper;