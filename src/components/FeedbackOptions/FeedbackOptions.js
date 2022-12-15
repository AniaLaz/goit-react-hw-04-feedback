import FeedbackOptionsButton from './FeedbackOptionsButton';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <FeedbackOptionsButton onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
    </div>
  );
};

export default FeedbackOptions;
