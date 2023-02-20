import Button from "@mui/material/Button";
import video from "./video.mp4";
import cl from "./About.module.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className={cl.container}>
      <div className={cl.video}>
        <video autoPlay playsInline muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={cl.welcomeBlock}>
        <h1 className={cl.welcomeText}>
          Welcome! <br />
          Click here to continue.
        </h1>
        <br />
        <NavLink to="/signin">
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              maxWidth: 250,
            }}
          >
            Sign In
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
