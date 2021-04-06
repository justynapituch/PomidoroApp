import React from "react";
import { uuid } from "uuidv4";
import "./App.css";

export class TimeBoxCreator extends React.Component {

  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.totalTimeInMinutesInput = React.createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate({
      id: uuid(),
      title: this.titleInput.current.value,
      totalTimeInMinutes: this.totalTimeInMinutesInput.current.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="time-box-creator">
        <label className="time-box-creator__label">
          Co robisz? <input type="text" ref={this.titleInput} />
        </label>
        <label className="time-box-creator__label">
          Ile czasu? <input type="number" ref={this.totalTimeInMinutesInput} />
        </label>
        <button type="submit">Stworz</button>
      </form>
    );
  }
}
