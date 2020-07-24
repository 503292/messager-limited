import React from "react";
import PropTypes from "prop-types";

import { ListGroup, Figure } from "react-bootstrap";
import { ReactComponent as Circle } from "../../../assets/img/circle.svg";
import { ReactComponent as Voice } from "../../../assets/img/request.svg";

import css from "./Users.module.scss";

const Users = ({ users }) => {
  return (
    <ListGroup className={css.usersUl}>
      {users.map((u) => {
        if (u.id === "1") {
          return "";
        } else {
          return (
            <ListGroup.Item className={css.usersLi}>
              <Figure className={css.oneUser}>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="50*50"
                  src={u.imgUrl}
                />
                <Figure.Caption className={css.wrapInfo}>
                  <div className={css.wrapDescription}>
                    <p className={css.userName}>{u.userName}</p>
                    {u.online && <Circle />}
                    {!u.voice && (
                      <div>
                        <Voice />
                      </div>
                    )}
                  </div>
                  <p className={css.userInfo}>{u.userInfo}</p>
                </Figure.Caption>

                <p className={css.dateTime}>{u.dateTime}</p>
              </Figure>
            </ListGroup.Item>
          );
        }
      })}
    </ListGroup>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Users;
