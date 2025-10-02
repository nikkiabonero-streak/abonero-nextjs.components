import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.topBar}>
      <h1 className={styles.mainTitle}>My Profile</h1>
      <h2 className={styles.subTitle}>Nikki Abonero</h2>
    </header>
  );
}
