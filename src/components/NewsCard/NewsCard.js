import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import checkItem from "../../utils/checkItem";
import altImg from "./default-img.jpg";

export default function NewsCards({ news }) {
  const { description, title, url, urlToImage } = news;

  const checkImgOrNull = () => {
    const httpRegex =
      /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/g;

    if (httpRegex.test(urlToImage)) {
      return urlToImage;
    } else {
      return altImg;
    }
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative", paddingBottom: "30px" }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={checkImgOrNull()}
        referrerPolicy="no-referrer"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url}>
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
