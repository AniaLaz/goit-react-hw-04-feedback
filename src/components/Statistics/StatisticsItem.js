import PropTypes from 'prop-types';
import css from 'components/Statistics/StatisticsItem.module.css';

const StatisticsItem = ({ valueGood, valueNeutral, valueBad }) => {
  return (
    <>
      <li className={css.statisticsItem}>
        Good:
        <span className={css.spanStatisticsItem}>{valueGood}</span>
      </li>
      <li className={css.statisticsItem}>
        Neutral:
        <span className={css.spanStatisticsItem}>{valueNeutral}</span>
      </li>
      <li className={css.statisticsItem}>
        Bad:
        <span className={css.spanStatisticsItem}>{valueBad}</span>
      </li>
      <li className={css.statisticsItem}>
        Total:
        <span className={css.spanStatisticsItem}>
          {valueGood + valueNeutral + valueBad}
        </span>
      </li>
      <li className={css.statisticsItem}>
        Positsve feetback:
        {(valueGood * 100) / (valueGood + valueNeutral + valueBad) > 50 ? (
          <span className={css.positsveFeetback}>
            {Math.round(
              (valueGood * 100) / (valueGood + valueNeutral + valueBad)
            )}
            %
          </span>
        ) : (
          <span className={css.spanStatisticsItem}>
            {Math.round(
              (valueGood * 100) / (valueGood + valueNeutral + valueBad)
            )}
            %
          </span>
        )}
      </li>
    </>
  );
};

StatisticsItem.propTypes = {
  valueGood: PropTypes.number,
  valueNeutral: PropTypes.number,
  valueBad: PropTypes.number,
};

export default StatisticsItem;
