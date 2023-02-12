import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NewsCard({ news }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = news;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="img" height="140" image={urlToImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={url}>
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
}
