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
            {/* {m.imgUserMessage &&} */}

            {m.imgUserMessage ? (
              <>
                <img src={m.imgUserMessage} alt="user foto" />
                <div className={`${css.left} ${css.msg}`}>
                  <LeftTriagel className={css.leftTriangel} />
                  <p>{m.message}</p>
                  <p className={css.time}>{m.time}</p>
                </div>
              </>
            ) : (
              <>
                <div className={`${css.right} ${css.msg}`}>
                  <p>{m.message}</p>
                  <p className={css.time}>{m.time}</p>
                  <RightTriagel className={css.rightTriangel} />
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
