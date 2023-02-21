import Button from "@mui/material/Button";
import video from "./video.mp4";
import cl from "./About.module.css";
import { NavLink } from "react-router-dom";
import News from "../../components/News/News";

const About = () => {
  return (
    <>
      <div className={cl.container}>
        <video
          className={cl.video}
          preload="auto"
          autoPlay
          playsInline
          muted
          loop
          src={video}
          controls=""
        />
        <div className={cl.welcomeBlock}>
          <h1 className={cl.welcomeText}>Welcome!</h1>
          <br />
        </div>
      </div>
      <News />
    </>
  );
};

export default About;
