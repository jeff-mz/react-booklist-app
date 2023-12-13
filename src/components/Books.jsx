import { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import FavoriteBooks from "./FavoriteBooks";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  // search
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState(bookData);
  const searchBook = () => {
    bookData.map((book) => {
      if (book.title.toLowerCase().includes(search)) {
        setBooks(() => [book]);
      } else setBooks(bookData);
    });
  };
  // Like Button
  const [favorites, setFavorites] = useState([]);
  const handleFavorites = (book, status) => {
    if (status) {
      const newFavorite = favorites.filter(
        (favorite) => favorite.id !== book.id
      );
      setFavorites(newFavorite);
    } else {
      setFavorites((favorites) => [...favorites, book]);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchBook={searchBook}
      />
      <main className={styles.cards}>
        {/* Book List Component */}
        <div className={styles.books_card}>
          {books.map((book) => {
            return (
              <BookCard
                key={book.id}
                data={book}
                handleFavorites={handleFavorites}
              />
            );
          })}
        </div>

        {/* Favorite List Component */}
        <div className={styles.fav_card}>
          <h2>Favorites : </h2>
          {favorites.length ? (
            favorites.map((favorite) => {
              return <FavoriteBooks favBook={favorite} key={favorite.id} />;
            })
          ) : (
            <p>Favorites Books is empty :)</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Books;
