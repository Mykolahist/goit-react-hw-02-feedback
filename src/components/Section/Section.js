import PropTypes from 'prop-types';

import { ImStarFull } from 'react-icons/im';
import { iconSize } from '../../contants';

import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      <ImStarFull size={iconSize.md} /> {title}{' '}
      <ImStarFull size={iconSize.md} />
    </h1>
    {children}
  </div>
);

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
