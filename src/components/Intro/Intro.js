import EmailForm from '../EmailForm/EmailForm';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.headline}>Muse Group Frontend Academy</h1>
        <div className={styles.text}>
          Our academy offers a transformative learning experience designed to empower you with the
          skills and knowledge needed to succeed in the ever-evolving field of frontend development.
        </div>
        <img src="/images/musician.png" alt="A guy playing guitar" className={styles.img} />
        <div className={styles.text}>
          Are you ready to turn your passion for technology into a thriving career?
        </div>
        <EmailForm />
      </div>
    </section>
  );
}