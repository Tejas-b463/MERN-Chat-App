import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChat] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    // console.log(data);
    setChat(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>
          <p> {chat.chatName}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatPage;
