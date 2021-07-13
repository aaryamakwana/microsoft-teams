import "./HomePage.scss";
import Header from "../UI/Header/Header";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
    //generated unique id and redirects
  };

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Microsoft Teams app</h2>
            <p>
              This is a video call platform
            </p>
            <div className="action-btn">
              <button className="btn blue" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faPhone} />
                New Call
              </button>
              
            </div>
          </div>
          <div className="help-text">
            Please click on "New Call" to start a Call with anyone.
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="../../microsoft_call_image.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
