import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const useChatGPT = () => {
  
  const [aiResponse, setAiResponse] = useState();
  const [aiImage, setAiImage] = useState();
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: "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",
  });

  const imageConfiguration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const imageOpenAi = new OpenAIApi(imageConfiguration);

  const aiGenerate = async (userInput) => {

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Split this in smaller subtasks: ${userInput}`,
        },
      ],
    });

    const responseImage = await imageOpenAi.createImage({
      prompt: userInput,
      n: 1,
      size: "256x256",
    });

    setAiImage(responseImage.data.data[0].url);
    setAiResponse(completion.data.choices[0].message.content);
    setLoading(false);
  };


  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleAiActivate = () => {
    setLoading(true);
    setAiResponse(null);
    aiGenerate(userInput);
  };

  return {
    aiResponse,
    aiImage,
    userInput,
    loading,
    handleUserInput,
    handleAiActivate,
  };
};

export default useChatGPT;
