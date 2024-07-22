import { Avatar, IconButton, TextField } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./MainChat.css";

const MainChat = () => {
  return (
    <div className="main-chat">
      <div className="chat-header">
        <div className="chat-info">
          <Avatar />
          <div>
            <h4>group name</h4>
            <span>group short description</span>
          </div>
        </div>

        <div className="chat-operations">
          <span>num of participants</span>
          <span>invite</span>
          <IconButton children={<SettingsIcon />} />
        </div>
      </div>
      <div className="chat-content"></div>
      <div className="send-msg">
        <TextField
          //   label="write a message"
          placeholder="write a message"
          variant="outlined"
          sx={{ width: "70%", marginLeft: "5%" }}
        />
        <div>
          <IconButton children={<AttachFileIcon />} />
          <IconButton children={<EmojiEmotionsIcon />} />
          <IconButton children={<SendIcon />} />
        </div>
      </div>
    </div>
  );
};

export default MainChat;
