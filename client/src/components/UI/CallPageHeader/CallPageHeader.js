import CallPage from "../../CallPage/CallPage"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserFriends,
    faCommentAlt,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import './CallPageHeader.scss';

const CallPageHeader = () => {
    return (
        <div className="frame-header">
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon" icon={faUserFriends} />
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                <span className="alert-circle-icon"></span>
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
            </div>
            <div className="header-items date-block">1:00</div>
        </div>
    )
}
export default CallPageHeader; 
