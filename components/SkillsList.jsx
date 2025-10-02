import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  const talentSet = ["Dribbling", "Shooting", "Passing"];

  return (
    <section className={styles.abilityPanel}>
      <h3 className={styles.abilityHeading}>Core Skills</h3>
      <ul className={styles.abilityList}>
        {talentSet.map((item, index) => (
          <li key={index} className={styles.abilityItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
