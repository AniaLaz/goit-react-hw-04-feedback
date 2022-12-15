import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import css from 'components/Section/Section.module.css';

const Section = (
{  handlGood,
  handlNeutral,
  handlBad,
  valueGood,
  valueNeutral,
  valueBad,}
) => {
  return (
      <section className={css.sectionFeedback}>
        <FeedbackOptions
          onGood={handlGood}
          onNeutral={handlNeutral}
          onBad={handlBad}
        />
        <Statistics
          valueGood={valueGood}
          valueNeutral={valueNeutral}
          valueBad={valueBad}
        />
      </section>
    );

};
export default Section;
