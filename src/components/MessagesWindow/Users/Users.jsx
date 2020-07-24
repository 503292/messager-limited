import React from "react";

import { ListGroup, Figure } from "react-bootstrap";

import css from "./Users.module.scss";

const Users = () => {
  return (
    <ListGroup className={css.usersUl}>
      <ListGroup.Item className={css.usersLi}>
        <Figure>
          <Figure.Image
            width={50}
            height={50}
            alt="50*50"
            src="holder.js/171x180"
          />
          <Figure.Caption>
            <div>
              <p>Name</p>
              <p>.</p>
              <p>voice</p>
            </div>
            <p>info</p>
          </Figure.Caption>

          <p>time</p>
        </Figure>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Users;
