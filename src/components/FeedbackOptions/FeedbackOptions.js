import React from "react";
import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.List}>
      {options.map((feedback) => (
        <li key={feedback}>
          <button
            className={s.Button}
            type="button"
            onClick={() => onLeaveFeedback(feedback)}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func,
};
