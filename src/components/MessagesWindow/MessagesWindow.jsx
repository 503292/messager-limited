import React from "react";
import PropTypes from "prop-types";

import Users from "./Users/Users";
import Search from "./Search/Search";
import Messages from "./Messages/Messages";
import AddMessage from "./AddMessage/AddMessage";

import css from "./MessagesWindow.module.scss";

const MessagesWindow = ({ users }) => {
  return (
    <div className={css.wrapMessagesWindow}>
      <Users users={users} />
      <div className={css.wrapMessages}>
        <Search />
        <Messages users={users} />
        <AddMessage />
      </div>
    </div>
  );
};

MessagesWindow.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MessagesWindow;
