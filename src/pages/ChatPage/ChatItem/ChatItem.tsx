import { Avatar } from "@mui/material";
import "./ChatItem.css";

const ChatItem = () => {
  return (
    <div className="chat-item">
      <Avatar sx={{ width: 45, height: 45 }} />
      <div className="chat-item-content">
        <div className="friend-info">
          <h4>Name Surname</h4>
          <span>8 min </span>
        </div>
        <span className="friend-msg">
          Last message Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi animi laboriosam aspernatur ratione
          dignissimos aut enim, cupiditate reprehenderit eligendi perspiciatis,
          tempora temporibus dolore praesentium alias ut nisi iusto iure
          repudiandae.++ sit amet, consectetur adipisicing{" "}
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
