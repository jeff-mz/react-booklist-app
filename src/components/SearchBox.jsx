import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchBook }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search_input}
        placeholder="Search Book"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={() => searchBook()} className={styles.search_btn}>
        <IoSearch className={styles.search_icon} />
      </button>
    </div>
  );
}

export default SearchBox;
