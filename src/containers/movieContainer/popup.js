import React from 'react';
import "./index.scss";

const Popup = ({showPopup, popUpData, handleShowPopupData}) => {
    return (
        <>
            {showPopup && 
                <div className="popUpBody" data-testid={popUpData.id}>
                    <ul>
                        <li className="titleStyle">{popUpData?.title}</li>
                        <li className="synopsisStyle">{popUpData?.synopsis}</li>
                        <li className="dateStyle">
                            Release Date: {popUpData?.releaseDate}
                        </li>
                    </ul>
                    <div className="clearStyle" />
                    <span 
                        className="buttonStyle" 
                        onClick={() => handleShowPopupData()} 
                        data-testid={popUpData.title}
                    >
                        Close
                    </span>
                    <div className="clearStyle" />
                </div>
            }
        </>
    )
}

export default Popup;