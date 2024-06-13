import EmailForm from '../EmailForm/EmailForm';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Muse Group Frontend Academy</h1>
        <p className={styles.subtitle}>
          Our academy offers a transformative learning experience designed to empower you with the
          skills and knowledge needed to succeed in the ever-evolving field of frontend development.
        </p>
        <picture>
          <source media="(max-width: 500px)" srcSet="./images/musician-mobile.png" />
          <source media="(min-width: 500px)" srcSet="./images/musician-desktop.png" />
          <img
            src="./images/musician-desktop.png"
            alt="A guy playing guitar"
            className={styles.img}
          />
        </picture>
        <p className={styles.text}>
          Are you ready to turn your passion for technology into a thriving career?
        </p>
        <EmailForm />
      </div>
    </section>
  );
}
