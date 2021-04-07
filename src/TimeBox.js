import React from "react";
import "./App.css";

export class TimeBox extends React.Component {
  // = ({
  //   title,
  //   totalTimeInMinutes,
  //   onDelete,
  //   onEdit,
  //   onCancel,
  //   onSave,
  //   isEditMode,
  // }) =>
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.totalTimeInMinutesInput = React.createRef();
    this.id = props.id;
  }

  handleSave = (event) => {
    event.preventDefault();
    this.props.onSave({
      id: this.props.id,
      title: this.titleInput.current.value,
      totalTimeInMinutes: this.totalTimeInMinutesInput.current.value,
      isEditMode: false,
    });
  };

  render() {
    return (
      <div className="time-box">
        {!this.props.isEditMode && (
          <h3>
            {this.props.title} - {this.props.totalTimeInMinutes}
          </h3>
        )}
        {this.props.isEditMode && (
          <div className="time-box-edit-mode">
            <input ref={this.titleInput} defaultValue={this.props.title} />
            <input
              ref={this.totalTimeInMinutesInput}
              defaultValue={this.props.totalTimeInMinutes}
            />
          </div>
        )}
        <div>
          {this.props.isEditMode && (
            <>
              <button onClick={this.props.onCancel}>Anuluj</button>
              <button onClick={this.handleSave}>Zapisz</button>
            </>
          )}
          {!this.props.isEditMode && (
            <button onClick={this.props.onEdit}>Edytuj</button>
          )}
          <button onClick={this.props.onDelete}>Usun</button>
        </div>
      </div>
    );
  }
}
