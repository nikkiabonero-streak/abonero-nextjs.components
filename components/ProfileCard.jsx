import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <section className={styles.identityBox}>
      <img
        src="prof.png"
        alt="Profile Avatar"
        className={styles.displayPhoto}
      />
      <h2 className={styles.personName}>Nikki Abonero</h2>
      <p className={styles.basicInfo}>Age: 19</p>
      <p className={styles.aboutText}>
        Enjoys playing basketball and spending time with dogs.
      </p>
    </section>
  );
}
