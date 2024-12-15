import React from 'react';
import './main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Chirag</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest the best programming language to learn in 2025.</p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>

          <div className="card">
            <p>Basics of programming languages.</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>

          <div className="card">
            <p>Improve the readability of the code.</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>

          <div className="card">
            <p>How to learn English properly.</p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here..." />
            <div>
              <img className="gallery-icon" src={assets.gallery_icon} alt="Gallery icon" />
              <img className="mic-icon" src={assets.mic_icon} alt="Mic icon" />
              <img className="send-icon" src={assets.send_icon} alt="Send icon" />
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
