import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/context';

const Sidebar = ({ isOpen, onClose }) => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, resetChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  const handleNewChat = () => {
    resetChat();
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="Menu" />
        <div className="new-chat" onClick={handleNewChat}>
          <img src={assets.plus_icon} alt="New chat" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.length > 0 ? (
              prevPrompts.map((item, index) => (
                <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                  <img src={assets.message_icon} alt="Message" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              ))
            ) : (
              <p className="no-recent">No recent prompts</p>
            )}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} alt="Settings" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
