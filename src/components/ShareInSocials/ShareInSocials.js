import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import cl from "./ShareInSocials.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, modalClose } from "../../redux/modalSlice";

export default function ShareInSocials({ description }) {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);

  const url = window.location.href;

  const handleClickOpen = () => {
    dispatch(modalOpen());
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      dispatch(modalClose());
    }
  };

  return (
    <div>
      <IconButton aria-label="share" onClick={handleClickOpen}>
        <ShareIcon sx={{ width: "30px", height: "30px" }} />
      </IconButton>
      <Dialog disableEscapeKeyDown open={modal} onClose={handleClose}>
        <DialogTitle>Share in your socials</DialogTitle>
        <div className={cl.shareIconCollections}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
          >
            <FacebookIcon
              sx={{ width: "40px", height: "40px", color: "#3b5998" }}
            ></FacebookIcon>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
              description
            )}`}
            target="_blank"
          >
            <TwitterIcon
              sx={{ width: "40px", height: "40px", color: "#00acee" }}
            ></TwitterIcon>
          </a>

          <a
            href={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${encodeURI(
              description
            )}`}
            target="_blank"
          >
            <PinterestIcon
              sx={{ width: "40px", height: "40px", color: "#c8232c" }}
            ></PinterestIcon>
          </a>

          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
          >
            <LinkedInIcon
              sx={{ width: "40px", height: "40px", color: " #0A66C2" }}
            ></LinkedInIcon>
          </a>

          <a
            href={`mailto:info@example.com?&subject=You+have+to+See+this!&cc=&bcc=&body=Check+out+this+site:${url}\n${encodeURI(
              description
            )}`}
            target="_blank"
          >
            <EmailIcon
              sx={{ width: "40px", height: "40px", color: "rgba(0,0,0,0.7)" }}
            ></EmailIcon>
          </a>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
