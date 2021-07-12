import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faTimes,
    faUser,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./MeetingInfo.scss";

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Your call has started!</h3>
                <FontAwesomeIcon
                    className="icon"
                    icon={faTimes}
                    onClick={() => {
                        setMeetInfoPopup(false);
                    }}
                />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
        To Add Others:
      </button>
            <p className="info-text">
                Share this link with others you want to invite on this call: 
      </p>
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon
                    className="icon"
                    icon={faCopy}
                    onClick={() => navigator.clipboard.writeText(url)}
                />
            </div>
        </div>
    );
};

export default MeetingInfo;
