import styles from "./FavoriteBook.module.css";

function FavoriteBooks({ favBook: { image, title, author, language, pages } }) {
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
    </div>
  );
}

export default FavoriteBooks;
