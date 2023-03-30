import React from "react";
import PropTypes from "prop-types";

import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
