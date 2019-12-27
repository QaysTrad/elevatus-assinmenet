import React from "react";
import Logo from "../../Assets/Images/logo_2.png";

const Home = ({ history }) => (
  <div className="home-container">
    <div>
      <img src={Logo} alt="" />
    </div>
    <div className="home-text">Welcome Elevatus Team</div>
    <div className="home-text">Press Next to start</div>
    <div className="button home-button" onClick={() => history.push("upload")}>
      Next
    </div>
  </div>
);

export default Home;
