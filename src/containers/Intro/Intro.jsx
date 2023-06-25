import { useRef, useState } from "react";
import video1 from "../../assets/meal.mp4";
import "./style.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();
  return (
    <div className="app__intro" id="intro">
      <div className="app__intro-video">
        <video
          src={video1}
          ref={vidRef}
          type="video/mp4"
          controls={false}
          autoPlay={true}
          loop
          muted
        />
      </div>
      <div
        className="app__intro-overlay"
        onClick={() => {
          setPlayVideo(!playVideo);
          if (playVideo) {
            vidRef.current.pause();
          } else {
            vidRef.current.play();
          }
        }}
      >
        <div className="app__intro-overlay-circle flex__center">
          {playVideo ? (
            <BsPauseFill className="icon" fontSize={40} color="#fff"/>
          ) : (
            <BsFillPlayFill className="icon" fontSize={40} color="#fff"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
