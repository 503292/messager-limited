import React from "react";

import { ReactComponent as Smile } from "../../../assets/img/smiling-emotion-square-face.svg";
import { ReactComponent as Clip } from "../../../assets/img/clip.svg";
import { ReactComponent as Send } from "../../../assets/img/send-message-button.svg";

import css from "./AddMessage.module.scss";

const AddMessage = () => {
  return (
    <div className={css.wrapAddMessage}>
      <input className={css.input} type="text" placeholder="Write a message…" />
      <div className={css.wrapButton}>
        <button>
          <Smile />
        </button>
        <button>
          <Clip />
        </button>
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default AddMessage;
