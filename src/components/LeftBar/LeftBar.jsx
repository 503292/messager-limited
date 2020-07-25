import React from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Calendar } from "../../assets/img/calendar.svg";
import { ReactComponent as MyProfile } from "../../assets/img/my-profile.svg";
import { ReactComponent as Tools } from "../../assets/img/handyman-tools.svg";
import { ReactComponent as Team } from "../../assets/img/team.svg";
import { ReactComponent as Message } from "../../assets/img/message.svg";

import css from "./LeftBar.module.scss";

const ativeStyle = {
  borderLeft: "5px solid #0ad69c",
};

const LeftBar = () => {
  return (
    <div className={css.wrapLeftBar}>
      <div className={css.wrapLogo}>
        <Logo />
      </div>

      <nav className={css.navbar}>
        <ul className={css.wrapList}>
          <li className={css.route}>
            <NavLink activeStyle={ativeStyle} to="/calendar" exact>
              <Calendar />
            </NavLink>
            <div className={css.counterMsg}>
              <p>1</p>
            </div>
          </li>
          <li className={css.route}>
            <NavLink to="/my-profile" exact activeStyle={ativeStyle}>
              <MyProfile />
            </NavLink>
          </li>
          <li className={css.route}>
            <NavLink to="/tools" exact activeStyle={ativeStyle}>
              <Tools />
            </NavLink>
          </li>
          <li className={css.route}>
            <NavLink to="/team" exact activeStyle={ativeStyle}>
              <Team />
            </NavLink>
          </li>
          <li className={css.route}>
            <NavLink to="/message" exact activeStyle={ativeStyle}>
              <Message />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftBar;
