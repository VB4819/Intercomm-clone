import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

function App() {
  const [selectedChat, setSelectedChat] = useState(0);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <div className="chat-section">
          <ChatList
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
          <ChatWindow chatId={selectedChat} />
        </div>
      </div>
    </div>
  );
}

export default App;
