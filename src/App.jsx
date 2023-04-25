import { Stack } from "@mui/system";
import { ArticleCard } from "./assets/Card/ArticleCard";
import { TextField } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";


function App() {

  const [request, setRequest] = useState('');

  const handleRequest = (e) => {
    setRequest(e.target.value);
  };

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
        <TextField onChange={handleRequest} />
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
        <ArticleCard request={request} />
        </motion.div>
      </Stack>
  );
}

export default App;