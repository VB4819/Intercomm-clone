import React from "react";
import "./ChatWindow.css";

const DUMMY_MESSAGES = [
  [
    { from: "user", text: "Hello, I need help!" },
    { from: "admin", text: "Hi John, how can I assist you today?" },
    { from: "user", text: "I can't log in." },
    { from: "admin", text: "Let me check your account." },
  ],
  [
    { from: "user", text: "Thank you!" },
    { from: "admin", text: "You're welcome, Jane!" },
  ],
  [
    { from: "user", text: "Can you assist?" },
    { from: "admin", text: "Sure, Bob. What do you need help with?" },
  ],
];

function ChatWindow({ chatId }) {
  const messages = DUMMY_MESSAGES[chatId] || [];

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
