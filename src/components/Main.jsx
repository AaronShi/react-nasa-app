import React from "react";

function Main(props) {
  const { data } = props;
  let image_type = data.media_type === "image";

  return { image_type } ? (
    <div className="imgContainer">
      <img
        className="bgImage"
        src={data?.hdurl}
        alt={data?.title || "bg-img"}
      />
    </div>
  ) : (
    <div className="imgContainer">
      <iframe
        width="100%"
        height="90%"
        src={data.url}
        // src={data.url + "&embedded=true"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Main;
