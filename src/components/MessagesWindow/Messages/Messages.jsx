import React from "react";
import PropTypes from "prop-types";

import css from "./Messages.module.scss";

const Messages = ({ users }) => {
  const userMessages = users[3].messages;

  return (
    <div className={css.wrapMessages}>
      <h3 className={css.dateTitle}>Today, 17.03.2018</h3>

      <ul className={css.descrMessage}>
        {userMessages.map((m, index) => (
          <li className={css.oneMessage} key={index}>
            {m.imgUserMessage && <img src={m.imgUserMessage} alt="user foto" />}

            {m.imgUserMessage ? (
              <div className={css.left}>
                <p>{m.message}</p>
                <p>{m.time}</p>
              </div>
            ) : (
              <div className={css.right}>
                <p>{m.message}</p>
                <p>{m.time}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

Messages.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Messages;
