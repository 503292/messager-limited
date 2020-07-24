import React from "react";

import Users from "./Users/Users";

import css from "./MessagesWindow.module.scss";

const MessagesWindow = () => {
  return (
    <div className={css.wrapMessagesWindow}>
      <Users />
      <div className={css.wrapMessages}>wrapMessages</div>
    </div>
  );
};

export default MessagesWindow;
