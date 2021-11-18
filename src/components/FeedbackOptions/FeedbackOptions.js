import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={styles.container}>
    {options.map(option => (
      <button
        type="button"
        key={option}
        className={styles.button}
        onClick={onLeaveFeedback}
        value={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
