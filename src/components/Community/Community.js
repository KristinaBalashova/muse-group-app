import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import styles from './Community.module.css';

export default function Community() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <SocialMediaLinks />
        <p className={styles.text}>
          You're not just a student - you're part of a vibrant community of like-minded individuals
          united by a passion for frontend development. Collaborate, innovate, and grow alongside
          fellow learners and industry professionals as you embark on this exciting journey
          together.
        </p>
      </div>
    </section>
  );
}
