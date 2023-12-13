import { useState } from "react";
import styles from "./BookCard.module.css";
import { FaHeart } from "react-icons/fa";

function BookCard({ data, handleFavorites }) {
  const { title, image, author, language, pages } = data;
  const [like, setLike] = useState(false);
  const clickHandler = () => {
    handleFavorites(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} alt="book" />
      <div className={styles.card_info}>
        <h3 className={styles.card_title}>{title}</h3>
        <ul className={styles.card_items}>
          <li className={styles.card_item}>Author: {author}</li>
          <li className={styles.card_item}>Language: {language}</li>
          <li className={styles.card_item}>Pages: {pages}</li>
        </ul>
      </div>
      <button onClick={clickHandler} className={styles.card_btn}>
        <FaHeart color={like ? `red` : `white`} className={styles.icon} />
      </button>
    </div>
  );
}

export default BookCard;
