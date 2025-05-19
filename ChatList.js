import React from "react";
import "./ChatList.css";

const DUMMY_CHATS = [
  { id: 0, name: "John Doe", lastMessage: "Hello, I need help!", unread: true },
  { id: 1, name: "Jane Smith", lastMessage: "Thank you!", unread: false },
  { id: 2, name: "Bob Lee", lastMessage: "Can you assist?", unread: true },
];

function ChatList({ selectedChat, setSelectedChat }) {
  return (
    <aside className="chat-list">
      {DUMMY_CHATS.map((chat) => (
        <div
          key={chat.id}
          className={`chat-list-item ${
            selectedChat === chat.id ? "selected" : ""
          }`}
          onClick={() => setSelectedChat(chat.id)}
        >
          <div className="chat-list-avatar">{chat.name[0]}</div>
          <div>
            <div className="chat-list-name">{chat.name}</div>
            <div className="chat-list-last">{chat.lastMessage}</div>
          </div>
          {chat.unread && <span className="chat-list-unread"></span>}
        </div>
      ))}
    </aside>
  );
}

export default ChatList;
