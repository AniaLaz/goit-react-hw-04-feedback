// import React from 'react';
import { useState } from 'react';
import Section from '../Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlGood = () => {
    setGood(good + 1);
  };

   const handlNeutral = () => {
     setNeutral(neutral + 1);
   };
   const handlBad = () => {
     setBad(bad + 1,
     );
   };

  return (
    <div>
      <Section
        handlGood={handlGood}
        handlNeutral={handlNeutral}
        handlBad={handlBad}
        valueGood={good}
        valueNeutral={neutral}
        valueBad={bad}
      />
    </div>
  );
}

// export class AppOld extends React.Component {
//   state = {
//     valueGood: 0,
//     valueNeutral: 0,
//     valueBad: 0,
//   };

//   handlGood = () => {
//     this.setState(prevState => ({
//       valueGood: prevState.valueGood + 1,
//     }));
//   };
//   handlNeutral = () => {
//     this.setState(prevState => ({
//       valueNeutral: prevState.valueNeutral + 1,
//     }));
//   };
//   handlBad = () => {
//     this.setState(prevState => ({
//       valueBad: prevState.valueBad + 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Section
//           handlGood={this.handlGood}
//           handlNeutral={this.handlNeutral}
//           handlBad={this.handlBad}
//           valueGood={this.state.valueGood}
//           valueNeutral={this.state.valueNeutral}
//           valueBad={this.state.valueBad}
//         />
//       </div>
//     );
//   }
// }
