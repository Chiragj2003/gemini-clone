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
          return [...prev, prompt];
        });
      } else {
        setPrevPrompts((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await runChat(input);
      }

      setResultData(response);
    } catch (error) {
      setResultData("Error: Unable to fetch data.");
    } finally {
      setLoading(false);
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
