import "./App.css";
import React from "react";
import { CurrentTimePlayer } from "./CurrentTimePlayer";
import { TimeBoxEditor } from "./TimeBoxEditor";
import { TimeBoxCreator } from "./TimeBoxCreator";
import { TimeBoxesList } from "./TimeBoxesList";

//wyciagnac logike start tez na zacznij
export const Clock = ({ classNameProp = "", minutes = 20, seconds = 48 }) => {
  return (
    <p className={"Clock " + classNameProp}>
      Pozostalo {minutes}:{seconds}
    </p>
  );
};

export const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="progress-bar-container">
      <div style={{ width: `${progress}%` }} className="progress-bar"></div>
    </div>
  );
};

class TimeEditor extends React.Component {
  state = {
    title: "Ucze sie",
    totalTimeInMinutes: 25,
    isEditable: true,
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleTotalTimeInMinutesChange = (event) => {
    this.setState({ totalTimeInMinutes: event.target.value });
  };

  handleOnConfirm = () => {
    this.setState({ isEditable: false });
  };

  handleOnEdit = () => {
    this.setState({ isEditable: true });
  };
  render() {
    const { title, totalTimeInMinutes, isEditable } = this.state;
    return (
      <>
        <TimeBoxEditor
          isEditable={isEditable}
          title={title}
          onConfirm={this.handleOnConfirm}
          totalTimeInMinutes={totalTimeInMinutes}
          onTitleChange={this.handleTitleChange}
          onTotalTimeInMinutesChange={this.handleTotalTimeInMinutesChange}
        />
        <CurrentTimePlayer
          isEditable={isEditable}
          onEdit={this.handleOnEdit}
          title={title}
          totalTimeInMinutes={totalTimeInMinutes}
        />
      </>
    );
  }
}

function App() {
  return (
    <main className="App">
      <TimeEditor />
      <TimeBoxesList />
    </main>
  );
}

export default App;
