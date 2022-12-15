import StatisticsItem from "./StatisticsItem"
import css from 'components/Statistics/Statistics.module.css';

const Statistics = ({ valueGood, valueNeutral, valueBad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {(valueGood === 0) & (valueNeutral === 0) & (valueBad ===0) ?<div className={css.nofeedback}>No feedback given</div> : (
          <StatisticsItem
            valueGood={valueGood}
            valueNeutral={valueNeutral}
            valueBad={valueBad}
          />
        )}
      </ul>
    </div>
  );
};

export default Statistics;