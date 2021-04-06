import React from "react";
import { Clock, ProgressBar } from "./App";

export class CurrentTimePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsedTimeInSeconds: 0,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.togglePause = this.togglePause.bind(this);
  }

  startTimer() {
    this.intervalId = window.setInterval(() => {
      this.setState((prevState) => ({
        elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
      }));
    }, 100);
  }

  stopTimer() {
    window.clearInterval(this.intervalId);
  }

  handleStart() {
    this.setState({
      isRunning: true,
      isPaused: false,
    });
    this.startTimer();
  }

  handleStop() {
    this.setState({
      isRunning: false,
      isPaused: false,
      pausesCount: 0,
      elapsedTimeInSeconds: 0,
    });
    this.stopTimer();
  }

  togglePause() {
    this.setState(function (prevState) {
      const isPaused = !prevState.isPaused;
      if (isPaused) {
        this.stopTimer();
      } else {
        this.startTimer();
      }
      return {
        isRunning: !prevState.isRunning,
        isPaused: !prevState.isPaused,
        pausesCount: isPaused
          ? prevState.pausesCount + 1
          : prevState.pausesCount,
      };
    });
  }

  render() {
    const { title, totalTimeInMinutes, isEditable, onEdit } = this.props;
    const {
      isRunning,
      isPaused,
      pausesCount,
      elapsedTimeInSeconds,
    } = this.state;
    const totalTimeInSeconds = totalTimeInMinutes * 60;
    const timeLeftInSecond = totalTimeInSeconds - elapsedTimeInSeconds;
    const minutesLeft = Math.floor(timeLeftInSecond / 60);
    const secondsLeft = Math.floor(timeLeftInSecond % 60);
    const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;
    return (
      <section className={`${isEditable ? "inactive" : ""} current-time-player`}>
        <h1>{title}</h1>
        <Clock
          minutes={minutesLeft}
          seconds={secondsLeft}
          classNameProp={isPaused ? "inactive" : ""} />
        <ProgressBar progress={progressInPercent} />
        <div>
          <button onClick={onEdit} disabled={isRunning}>
            Edytuj
          </button>
          <button onClick={this.handleStart} disabled={isRunning}>
            Start
          </button>
          <button onClick={this.handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={this.togglePause} disabled={!isRunning && !isPaused}>
            {isPaused ? "Wznow" : "Pauza"}
          </button>
        </div>
        Liczba przerw: {pausesCount}
      </section>
    );
  }
}
