import React from "react";

import { Breadcrumb } from "react-bootstrap";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      {/* <div className={css.breadCrumbs}> */}
      <Breadcrumb className={css.breadCrumbs}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Network</Breadcrumb.Item>
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
