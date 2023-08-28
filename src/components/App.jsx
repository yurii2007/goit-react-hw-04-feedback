import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => parseInt((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <>
      <Section title='Please leave feedback'>
      <FeedbackOptions
          options={this.state}
          feedbackCounter={this.leaveFeedback}
        />
      </Section>
      <Section title='Statistics'>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />)}
      </Section>
      </>
    );
  }
}
