import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import backgroundVideo from "./video.mp4";
import cl from "./About.module.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className={cl.container}>
      <video autoPlay muted loop className={cl.video}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={cl.welcomeBlock}>
        <h1 className={cl.welcomeText}>
          Welcome! <br />
          Click here to continue.
        </h1>
        <br />
        <div className={cl.arrow}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <NavLink to="/signin">
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 25,
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
