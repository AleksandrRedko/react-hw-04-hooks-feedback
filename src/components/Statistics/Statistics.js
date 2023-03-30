import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.List}>
      <li>Good: {good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad: {bad} </li>
      <li>total: {total} </li>
      <li>positive feedback: {positivePercentage} % </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
