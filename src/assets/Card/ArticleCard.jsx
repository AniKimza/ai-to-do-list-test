import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ArticleCard = (element) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    element.aiActivate()
  };

  const currentDate = new Date().toDateString();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={currentDate} subheader="Test me out today!" />
      <CardMedia
        component="img"
        image={element.loading ?  "https://i.pinimg.com/originals/50/74/eb/5074eb89bce06dfc710ea21d5c0e2913.png" : element.image}
        alt="AI"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {element.request}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <DeveloperBoardIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {!element.loading && <Typography paragraph>{element.subtasks}</Typography>}
        </CardContent>
      </Collapse>
    </Card>
  );
};
