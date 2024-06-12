import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <img src="./images/muse-group-logo.png" className={styles.logo} alt="logo" />
      </div>
    </header>
  );
}
