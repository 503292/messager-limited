import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as LeftTriagel } from "../../../assets/img/left-msg.svg";
import { ReactComponent as RightTriagel } from "../../../assets/img/right-msg.svg";

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
              <>
                <LeftTriagel />
                <div className={css.left}>
                  <p>{m.message}</p>
                  <p>{m.time}</p>
                </div>

                {/* <div className={css.leftInvisible}></div> */}
              </>
            ) : (
              <>
                {/* <div className={css.rightInvisible}></div> */}
                <div className={css.right}>
                  <p>{m.message}</p>
                  <p>{m.time}</p>
                  <RightTriagel />
                </div>
              </>
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
