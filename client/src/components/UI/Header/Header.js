import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://cdn.worldvectorlogo.com/logos/microsoft-teams.svg" />  
                <span className="help-text">
                    Microsoft Teams Clone
                </span>
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faCog} />
            </div>
        </div>
    )
}

export default Header; 