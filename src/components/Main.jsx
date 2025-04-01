import React from "react";

function Main(props) {
  const { data } = props;
  let image_type = data.media_type === "video";

  return { image_type } ? (
    <div className="imgContainer">
      <iframe
        width="100%"
        height="90%"
        src={data.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share"
        allowfullscreen
      ></iframe>
    </div>
  ) : (
    <div className="imgContainer">
      <img
        className="bgImage"
        src={data?.hdurl}
        alt={data?.title || "bg-img"}
      />
    </div>
  );
}

export default Main;
