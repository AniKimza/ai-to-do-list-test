import { Stack } from "@mui/system";
import { ArticleCard } from "./assets/Card/ArticleCard";
import { TextField } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import useChatGPT from "./useChatGPT";


function App() {

  const {
    aiResponse,
    aiImage,
    userInput,
    loading,
    handleUserInput,
    handleAiActivate,
  } = useChatGPT();

  return (
    
      <Stack height='100vh' direction="row" justifyContent="center" alignItems='center' spacing={3}>
         <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
        <TextField onChange={handleUserInput} />
        </motion.div>
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
        <ArticleCard request={userInput} subtasks = {aiResponse} image={aiImage} loading={loading} aiActivate = {handleAiActivate}/>
        </motion.div>
      </Stack>
  );
}

export default App;