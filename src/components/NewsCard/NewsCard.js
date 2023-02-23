import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import altImg from "./default-img.jpg";

export default function NewsCards({ news }) {
  const { snippet, lead_paragraph, web_url, multimedia } = news;

  const checkImgOrNull = () => {
    const httpRegex =
      /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g;

    if (multimedia.length !== 0) {
      return `https://static01.nyt.com/${multimedia[0].url}`;
    } else {
      return altImg;
    }
  };

  return (
    <Card sx={{ width: 345, position: "relative", paddingBottom: "30px" }}>
      <CardMedia
        component="img"
        alt={snippet}
        height="140"
        src={checkImgOrNull()}
        referrerPolicy="no-referrer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {snippet}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span dangerouslySetInnerHTML={{ __html: lead_paragraph }} />
        </Typography>
      </CardContent>
      <CardActions>
        <a href={web_url}>
          <Button
            size="small"
            sx={{ position: "absolute", bottom: "10px", left: "10px" }}
          >
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
