import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import styles from './Footer.module.css';

const legalLinks = [
  {
    title: 'Help Center',
    href: 'https://support.animaapp.com/en/',
  },
  {
    title: 'Privacy Policy',
    href: 'https://forum.animaapp.com/privacy',
  },
  {
    title: 'Terms of Service',
    href: 'https://forum.animaapp.com/tos',
  },
];

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <ul className={styles.legals}>
          {legalLinks.map(({ title, href }) => (
            <li className={styles.item} key={title}>
              <a href={href} target="_blank" rel="noreferrer noopener" className={styles.link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
