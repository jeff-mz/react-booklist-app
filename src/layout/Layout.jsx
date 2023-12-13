import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <main className={styles.container}>
      <header>
        <h1 className={styles.title}>Book Listing App </h1>
      </header>
      {children}
      <footer>
        <p className={styles.copyright}> &copy; Jafar Mirzapoor Made With 💗</p>
      </footer>
    </main>
  );
}

export default Layout;
