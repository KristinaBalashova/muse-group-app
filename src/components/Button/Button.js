import cx from 'classnames';
import styles from './Button.module.css';

//button styling options:
//filled and text

export const Button = ({ href = null, content, filled = false, text = false, type }) => (
  <button
    href={href}
    className={cx(styles.button, filled && styles.filled, text && styles.text)}
    type={type}
  >
    {content}
    {filled && <img src={`./images/arrow-big.svg`} alt={'arrow'} />}
    {text && <img src={`./images/arrow-simple.svg`} alt={'arrow'} />}
  </button>
);
