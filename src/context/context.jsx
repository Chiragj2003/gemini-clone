import { createContext, useState } from 'react';
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  // Typing animation effect
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);

    try {
      let response;
      if (prompt !== undefined) {
        response = await runChat(prompt);
        setRecentPrompt(prompt);
        setPrevPrompts((prev) => {
          // Avoid duplicate prompts
          if (!prev.includes(prompt)) {
            return [...prev, prompt];
          }
          return prev;
        });
      } else {
        setPrevPrompts((prev) => {
          if (!prev.includes(input)) {
            return [...prev, input];
          }
          return prev;
        });
        setRecentPrompt(input);
        response = await runChat(input);
      }

      // Typing animation
      let responseArray = response.split(" ");
      let newResponse = "";
      
      for (let i = 0; i < responseArray.length; i++) {
        const nextWord = responseArray[i];
        delayPara(i, nextWord + " ");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error in onSent:", error);
      setResultData("⚠️ Sorry, I encountered an error. Please try again or check your API key.");
      setLoading(false);
    } finally {
      setInput('');
    }
  };

  const resetChat = () => {
    // Reset all the states to start a new chat
    setInput('');
    setRecentPrompt('');
    setPrevPrompts([]);
    setResultData('');
    setShowResult(false);
    setLoading(false);
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    resetChat, // Add resetChat to context value
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
