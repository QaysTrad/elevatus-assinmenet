import React from "react";

const NotFound = () => (
  <div className="notfound-container">
    <div className="message">Sorry This Page Not Found</div>
    <div onClick={() => (window.location.href = "/")} className="back button">
      Home
    </div>
  </div>
);

export default NotFound;
