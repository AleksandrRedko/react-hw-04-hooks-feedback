import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Number(((100 / countTotalFeedback()) * good).toFixed(2));
  };

  const onFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        console.log(`Error`);
    }
  };
  const styles = {
    fontSize: 24,
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <p style={{ ...styles }}>No feedback given</p>
        )}
      </Section>
    </>
  );
}

export default App;
