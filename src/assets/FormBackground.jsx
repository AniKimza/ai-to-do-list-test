import { motion } from "framer-motion";
import "./formBackgroundStyles.css";
import { Stack } from "@mui/material";

export const FormBackground = ({ width, height }) => {
  console.log(width);

  const getRowItemSize = (width) => {
    const noItemsFit = Math.floor(width / 80);
    // we devide it with 80 because this is the size of our item at its full width
    const noItemsNoSpace = Math.floor(noItemsFit / 4);
    // we devide it by two because we want one item one empty space and so on and also two including the spacing
    return noItemsNoSpace;
  };

  const getRowNumber = (height) => {
    const noRowsSpaceFalse = Math.floor(height / 80);
    // we devide the height by 80 becouse the size of each item in max size is 80
    const noRowSpaceTrue = Math.floor(noRowsSpaceFalse / 2)
    // we devide the number of rows by two in order to add some space bettween the rows
    return noRowSpaceTrue;
  };

  const elements = Array(getRowItemSize(width)).fill(
    <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );

  const grid = ( elements, rowNumber ) => {
    const finalGridOfItems = new Array(rowNumber).fill().map((_, index) => {
      if(index % 2 === 0){
        return <Stack key={index} direction="row" justifyContent={"space-around"}>
                 {elements.map((item, index) => <div key={index}>{item}</div>)}
               </Stack>
      }else{
        return <Stack key={index} direction="row" justifyContent={"space-between"}>
        {elements.map((item) => item)}
      </Stack>
      }
    })
    return finalGridOfItems
  };

  return (
    <Stack
      position={"absolute"}
      spacing={15}
      sx={{
        overflow: "hidden",
        height: height,
        zIndex: -1,
        width: width,
        borderRadius: "15px",
      }}
    >
      {grid(elements, getRowNumber(height)).map(item => item)}
    </Stack>
  );
};
