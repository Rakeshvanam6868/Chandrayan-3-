import React from "react";

function AudioPlayer({ audioSrc }) {
  return (
    <>
      <audio controls autoPlay>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default AudioPlayer;
