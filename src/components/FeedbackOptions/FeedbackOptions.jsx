import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, feedbackCounter }) => {
  return (
      <ul>
        {Object.keys(options).map(id => {
          return (
            <li key={id}>
              <button type="button" onClick={() => feedbackCounter(id)}>
                {id}
              </button>
            </li>
          );
        })}
      </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  feedbackCounter: PropTypes.func.isRequired,
};
