import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

const useChatGPT = () => {
    const configuration = new Configuration({
        organization: "org-TTTH7wocXez3qKU1Rt9gfNE5",
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
    
      const [aiResponse, setAiResponse] = useState();
      const [userInput, setUserInput] = useState("");
      const [loading, setLoading] = useState(false)
    
        const aiGenerate = async (customQuestion) => {
          const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Split this in smaller subtasks: ${customQuestion}`,
              },
            ],
          });
          setAiResponse(completion.data.choices[0].message.content);
          setLoading(false)
        };
    
      const handleUserInput = (e) => setUserInput(e.target.value);
      const handleAiActivate = async() => {
        setLoading(true)
        setAiResponse(null)
        aiGenerate(userInput);
      };

      return {
        aiResponse,
        userInput,
        loading,
        handleUserInput,
        handleAiActivate
      }
}

export default useChatGPT