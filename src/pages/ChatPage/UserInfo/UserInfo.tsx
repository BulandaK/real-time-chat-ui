// import React from "react";
import { Avatar, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="user-info">
      <div>
        <Avatar alt="Remy Sharp" src="" />
        <div>
          <h4>Rafel Ramaisen</h4>
          <span>Available for freelance work</span>
        </div>
      </div>
      <Button size="large" startIcon={<NotificationsIcon />} />
    </div>
  );
}

export default UserInfo;
