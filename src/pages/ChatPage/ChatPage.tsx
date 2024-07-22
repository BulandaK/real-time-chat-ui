// import React from "react";

import "./ChatPage.css";
import UserInfo from "./UserInfo/UserInfo";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupIcon from "@mui/icons-material/Group";
import DialpadIcon from "@mui/icons-material/Dialpad";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import CustomCssInput from "../../components/CustomCssInput/CustomCssInput";
import ChatItem from "./ChatItem/ChatItem";
import MainChat from "./MainChat/MainChat";

function ChatPage() {
  return (
    <div className="chat-page-container">
      <div className="side-bar">
        <UserInfo />
        <div className="icons">
          <Button size="large" startIcon={<ChatBubbleIcon />} />
          <Button size="large" startIcon={<DialpadIcon />} />
          <Button size="large" startIcon={<GroupIcon />} />
          <Button size="large" startIcon={<SettingsIcon />} />
        </div>
        <div className="search-box">
          <CustomCssInput label="search-chats" />
        </div>
        <div className="user-chats">
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
        </div>
      </div>
      <MainChat />
    </div>
  );
}

export default ChatPage;
