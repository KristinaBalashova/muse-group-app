import cx from 'classnames';
import styles from './Button.module.css';

export const Button = ({ href = null, content, filled = false, type }) => (
  <button href={href} className={cx(styles.button, filled && styles.filled)} type={type}>
    {content}
    <img src={`./images/arrow-big.svg`} alt={'arrow'} />
  </button>
);
