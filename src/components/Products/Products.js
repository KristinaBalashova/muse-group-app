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

export function Products() {
  return (
    <section className={styles.root}>
      <div id="container" className={styles.container}>
        <h2 className={styles.header}>Our Products</h2>
        <div className={styles.products}>
          {products.map(({ color, title, description }, id) => {
            return (
              <div className={styles.productCard} key={id}>
                <div style={{ backgroundColor: color }} className={styles.cardPic}></div>
                <div className={styles.cardInfo}>
                  <h4 className={styles.title}>{title}</h4>
                  <p className={styles.description}>{description}</p>
                  <Button href="" content="Read more" text type="button" />
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
