import React from "react";

const CurrentDialog = (props) => {
    return(
        <>
            {
                props.props.map((dialog, i) => (
                    <div className="messages-dialogs-item">
                        <div className="messages-dialogs-item-icon">
                            <img src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png" alt=""/>
                        </div>
                        <div className="messages-dialogs-item-text">
                            <p>
                                { dialog.massage }
                            </p>
                            <p className="answer">
                                { dialog.answer }
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default CurrentDialog;