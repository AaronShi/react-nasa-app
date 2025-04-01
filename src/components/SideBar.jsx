import React from "react";

function SideBar(props) {
  const { data, handleSlideModal } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleSlideModal}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="discrpitionTitle">{data?.date}</p>
          <p>
            {data?.explanation}
          </p>
        </div>
        <button onClick={handleSlideModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
