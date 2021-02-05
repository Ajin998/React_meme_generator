import React from "react";
import styles from "../styles/Meme_card.module.css";
const Meme_card = ({ meme }) => {
  return (
    <div className={styles["meme__card"]}>
      <img src={meme} alt="meme_card" style={{ width: 500 }} />
      <p>Share your Meme with friends by coping the url </p>
      <span>
        <a href={meme}>{meme}</a>
      </span>
    </div>
  );
};

export default Meme_card;
