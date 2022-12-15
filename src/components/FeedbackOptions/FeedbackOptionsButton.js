import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptionsButton.module.css';

const FeedbackOptionsButton = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={css.divButton}>
      <button
        className={`${css.button} ${css.buttonGood} `}
        type="button"
        onClick={onGood}
      >
        Good
      </button>
      <button className={css.button} type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button
        className={`${css.button} ${css.buttonBad} `}
        type="button"
        onClick={onBad}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptionsButton.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};

export default FeedbackOptionsButton;
