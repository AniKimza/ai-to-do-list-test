import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import Stack from "@mui/material/Stack";
import { FormBackground } from "../FormBackground";
import RingLoader from "react-spinners/RingLoader";
import loader from "./loader.png";
import { useResizeDetector } from 'react-resize-detector';
import './iconButton.css'


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
  const [expanded, setExpanded] = useState(false);
  // const [cardWidth, setCardWidth] = useState("280px");
  // const [cardHeight, setCardHeight] = useState("377px");
  const { width, height, ref } = useResizeDetector();

  console.log(width)


  const handleExpandClick = () => {
    setExpanded(!expanded);
    element.aiActivate();
  };

  const CorrectMedia = () => {
    if (element.loading === true) {
      return <RingLoader color="purple" size={275} />;
    }
    if (element.loading === false) {
      return <img style={{ borderRadius: "15px", width: '100%' }} src={element.image} />;
    }
    return (
      <img style={{ borderRadius: "15px", width: "275px" }} src={loader}></img>
    );
  };

  const currentDate = new Date().toDateString();

  return (
    <Stack>
      {width && <FormBackground width={width} height={height}/>}

      <Card
        ref={ref}
        sx={{
          width: "100%",
          height: '100%',
          background: "rgba(239, 226, 226, 0.26)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7.3px)",
          webkitBackdropFilter: "blur(7.3px)",
          border: "1px solid rgba(239, 226, 226, 0.31)",
        }}
        >
        <Stack width={"100%"} alignItems={"center"}>
          <CardHeader title={currentDate} subheader="Test me out today!" />
          <CardContent>
            <CorrectMedia />
          </CardContent>
        </Stack>
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
          >
            {/* <div  className="icon-button"> */}
            <DeveloperBoardIcon className="icon-button"/>
            {/* </div> */}
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            {!element.loading &&
              element.subtasks.map((subtask, index) => (
                <Typography key={index} paragraph>
                  {subtask}
                </Typography>
              ))}
          </CardContent>
        </Collapse>
      </Card>
    </Stack>
  );
};
