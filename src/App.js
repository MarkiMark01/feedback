import React, { useState } from 'react';
import './App.css';
import Feedback from './components/Feedback';
import Statistic from './components/Statistic';
import { Section } from './components/Section';
import './components/styles.css';

function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => Math.round((feedback.good / countTotalFeedback()) * 100) || 0;


  return (
    <div className="App">
      <div className='main-container'>
        <Feedback handleClick={handleClick} option={feedback} />
        <Section message="Your feedback is important to us" />
        <Statistic stats={feedback} total={countTotalFeedback()} percentage={countPositiveFeedbackPercentage()} />
      </div>
    </div>
  );
}

export default App;

