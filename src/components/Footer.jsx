import React from "react";

function Footer(props) {
  const {data, handleSlideModal} = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data.title}</h2>
      </div>
      <button onClick={handleSlideModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
