import React from "react";
import "./App.css";

export const TimeBoxEditor = (props) => {
  const {
    title,
    totalTimeInMinutes,
    onTitleChange,
    onTotalTimeInMinutesChange,
    isEditable,
    onConfirm,
  } = props;

  return (
    <section className={`${isEditable ? "" : "inactive"} time-box-editor`}>
      <label className="time-box-editor__label">
        Co robisz?{" "}
        <input onChange={onTitleChange} defaultValue={title} type="text" />
      </label>
      <label className="time-box-editor__label">
        Ile czasu?{" "}
        <input
          onChange={onTotalTimeInMinutesChange}
          defaultValue={totalTimeInMinutes}
          type="number"
        />
      </label>
      <button disabled={!isEditable} onClick={onConfirm}>
        Zacznij
      </button>
    </section>
  );
};
