import PropTypes from 'prop-types';

import { ImPacman, ImHappy, ImSmile, ImSad } from 'react-icons/im';
import { FaChartPie, FaChartBar } from 'react-icons/fa';
import { iconSize } from '../../contants';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={styles.title}>
      Statistics <ImPacman size={iconSize.sm} />
    </h2>
    <p className={styles.item}>
      <ImHappy size={iconSize.sm} /> Good: {good}
    </p>
    <p className={styles.item}>
      <ImSmile size={iconSize.sm} /> Neutral: {neutral}
    </p>
    <p className={styles.item}>
      <ImSad size={iconSize.sm} /> Bad: {bad}
    </p>
    <p className={styles.item}>
      <FaChartPie size={iconSize.sm} /> Total: {total}
    </p>
    <p className={styles.item}>
      <FaChartBar /> Positive feedback: {positivePercentage}%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
