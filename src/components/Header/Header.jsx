import React from "react";

import { Breadcrumb } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../assets/img/arror-right.svg";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      {/* <div className={css.breadCrumbs}> */}
      <Breadcrumb target="c" className={css.breadCrumbs}>
        <Breadcrumb.Item bsPrefix="" href="/home">
          Home
        </Breadcrumb.Item>
        <div className={css.arrow}>
          <Arrow />
        </div>
        <Breadcrumb.Item href="/network">Network</Breadcrumb.Item>
      </Breadcrumb>
      {/* <p>Home</p> */}
      {/* <img alt="arrow-right" />
        <p>Network</p> */}
      {/* </div> */}
      <div className={css.userInfo}>
        <img alt="foto user" />
        <p>Sarah Freman</p>
        <img alt="arrow bottom" />
      </div>
    </div>
  );
};

export default Header;
