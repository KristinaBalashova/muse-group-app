import styles from './SocialMediaLinks.module.css';

const socialMediaList = [
  {
    id: 'insta',
    href: 'https://www.instagram.com/animaapp/',
  },
  {
    id: 'telegram',
    href: 'https://twitter.com/AnimaApp',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/anima-app',
  },
  {
    id: 'facebook',
    href: 'https://discord.gg/eQxkYTNxSp',
  },
];

//wrong links for telegram and facebook

export function SocialMediaLinks() {
  return (
    <div className={styles.root}>
      <div className={styles.socialList}>
        {socialMediaList.map(({ id, href }) => (
          <a href={href} target="_blank" rel="noreferrer noopener" className={styles.item} key={id}>
            <img src={`./images/${id}.svg`} alt={`${id}-logo`} />
          </a>
        ))}
      </div>
    </div>
  );
}
