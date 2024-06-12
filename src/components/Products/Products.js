import { Button } from '../Button/Button';
import styles from './Products.module.css';

const products = [
  {
    color: '#FFC800',
    title: 'Ultimate Guitar',
    description:
      "The best platform for music makers to play songs they love. Home to the world's largest music community.",
  },
  {
    color: '#2E68C0',
    title: 'MuseScore',
    description:
      'Create, play back, and print sheet music with free open source notation software.',
  },
  {
    color: '#EA1542',
    title: 'audio.com',
    description: 'The easiest way to share any sound online.',
  },
  {
    color: '#1D4ED8',
    title: 'Audacity',
    description: "The world's most popular audio editing and recording app.",
  },
];

//tag h1 in this block made like it was declared in figma design
//but probably it's better to have only one h1 tag (th one in Intro component) for SEO reasons

export function Products() {
  return (
    <section className={styles.root}>
      <div id="container" className={styles.container}>
        <h1 className={styles.header}>Our Products</h1>
        <div className={styles.products}>
          {products.map(({ color, title, description }, id) => {
            return (
              <div className={styles.productCard} key={id}>
                <div style={{ backgroundColor: color }} className={styles.cardPic}></div>
                <div className={styles.cardContent}>
                  <h4 className={styles.title}>{title}</h4>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.linkContainer}>
                    <a href="" target="_blank" rel="noreferrer noopener" className={styles.link}>
                      Read more
                    </a>
                    <img src={`./images/arrow-simple.svg`} alt={'arrow'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
