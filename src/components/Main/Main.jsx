import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context'; 
import { ChatResponse } from '../ai/chat';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, resetChat } = useContext(Context);

  const handleSendClick = () => {
    onSent(input);
    setInput('');
  };

  const handleCardClick = (cardPrompt) => {
    setInput(cardPrompt);
  };

  const handleNewChat = () => {
    resetChat(); // Reset all chat-related data
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Chirag</span></p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card" onClick={() => handleCardClick('Suggest the best programming language to learn in 2025.')}>
                <p>Suggest the best programming language to learn in 2025.</p>
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>

              <div className="card" onClick={() => handleCardClick('Basics of programming languages.')}>
                <p>Basics of programming languages.</p>
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>

              <div className="card" onClick={() => handleCardClick('Improve the readability of the code.')}>
                <p>Improve the readability of the code.</p>
                <img src={assets.code_icon} alt="Code Icon" />
              </div>

              <div className="card" onClick={() => handleCardClick('How to learn English properly.')}>
                <p>How to learn English properly.</p>
                <img src={assets.message_icon} alt="Message Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <ChatResponse response={resultData}/>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img className="gallery-icon" src={assets.gallery_icon} alt="Gallery icon" />
              <img className="mic-icon" src={assets.mic_icon} alt="Mic icon" />
              {input? <img className="send-icon" src={assets.send_icon} alt="Send icon" onClick={handleSendClick} /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information about people, so double-check its responses. Your privacy is important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
