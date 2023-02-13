import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import checkItem from "../../utils/checkItem";

export default function NewsCard({ news }) {
  const { description, title, url, urlToImage } = news;

  return (
    <Card sx={{ maxWidth: 345, position: "relative", paddingBottom: "30px" }}>
      {
        <CardMedia
          component="img"
          alt="img"
          height="140"
          image={checkItem(urlToImage)}
        />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.replace(/<[^<>]+>/g, "")}
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
