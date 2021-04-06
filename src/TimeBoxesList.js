import React from "react";
import { TimeBox } from "./TimeBox";
import { TimeBoxCreator } from "./TimeBoxCreator";

export class TimeBoxesList extends React.Component {
  state = {
    timeboxes: [
      {
        id: "a",
        title: "Uczę się list",
        totalTimeInMinutes: 25,
        editMode: false,
      },
      {
        id: "b",
        title: "Uczę się formularzy",
        totalTimeInMinutes: 15,
        editMode: false,
      },
      {
        id: "c",
        title: "Uczę się komponentów niekontrolowanych",
        totalTimeInMinutes: 5,
        editMode: false,
      },
    ],
  };

  addTimeBox = (timebox) => {
    this.setState((prevState) => {
      const timeboxes = [...prevState.timeboxes, timebox];
      return { timeboxes };
    });
  };

  removeTimebox = (indexToRemove) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.filter(
        (timebox) => timebox.id !== indexToRemove
      );
      return { timeboxes };
    });
  };

  updateTimebox = (timeboxToUpdate) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.map((timebox) =>
        timebox.id === timeboxToUpdate.id ? timeboxToUpdate : timebox
      );
      return { timeboxes };
    });
  };

  handleCreate = (timebox) => {
    this.addTimeBox(timebox);
  };

  setEditMode = (timeboxId) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.map((timebox) =>
        timebox.id === timeboxId ? { ...timebox, isEditMode: true } : timebox
      );
      return { timeboxes };
    });
  };

  setReadOnlyMode = (timeboxId) => {
    this.setState((prevState) => {
      const timeboxes = prevState.timeboxes.map((timebox) =>
        timebox.id === timeboxId ? { ...timebox, isEditMode: false } : timebox
      );
      return { timeboxes };
    });
  };
  //znalezc blad z pausa

  //Edycja: toggle-edit

  //   Stwórz referencję do formularza (zamiast do pojedynczych pól) i w metodzie handleSubmit dostań się do wartości za pomocą API przeglądarki.

  //   Podaj przykład w którym przypisanie indeksu tablicy do klucza ma sens.

  //   Zaimplementuj w inny sposób dodawanie, usuwanie i edycję elementów tablicy, bez modyfikacji starych wartości.

  render() {
    return (
      <>
        <TimeBoxCreator onCreate={this.handleCreate} />
        {this.state.timeboxes &&
          this.state.timeboxes.map((timebox) => (
            <TimeBox
              key={timebox.id}
              title={timebox.title}
              id={timebox.id}
              totalTimeInMinutes={timebox.totalTimeInMinutes}
              onDelete={() => this.removeTimebox(timebox.id)}
              onEdit={() => {
                this.setEditMode(timebox.id);
              }}
              onSave={this.updateTimebox}
              onCancel={() => {
                this.setReadOnlyMode(timebox.id);
              }}
              isEditMode={timebox.isEditMode}
            />
          ))}
      </>
    );
  }
}
