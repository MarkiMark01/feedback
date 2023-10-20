import React, { useEffect, useState } from 'react';
import './App.css';
import Feedback from './components/Feedback';
import Statistic from './components/Statistic';
import Section from './components/Section';

function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;


  return (
    <div className="App">
      <Feedback handleClick={handleClick} option={state} />
      <Section message={"Statistic"} />
      <Statistic stats={state} total={countTotalFeedback()} percentage={countPositiveFeedbackPercentage()} />

    </div>
  );
}

export default App;
