import React from "react";

import { Breadcrumb, Figure } from "react-bootstrap";
import { ReactComponent as ArrowR } from "../../assets/img/arrow-right.svg";
import { ReactComponent as ArrowB } from "../../assets/img/arrow-bottom.svg";
import userImg from "../../assets/img/users/user1.png";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      <Breadcrumb target="c" className={css.breadCrumbs}>
        <Breadcrumb.Item bsPrefix="" href="/">
          Home
        </Breadcrumb.Item>
        <div className={css.arrow}>
          <ArrowR />
        </div>
        <Breadcrumb.Item href="/">Network</Breadcrumb.Item>
      </Breadcrumb>
      <Figure className={css.userInfo}>
        <Figure.Image width={22} height={22} alt="171x180" src={userImg} />
        <Figure.Caption>Sarah Freeman</Figure.Caption>
        <ArrowB />
      </Figure>
    </div>
  );
};

export default Header;
