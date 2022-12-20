import React, { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  
  const [addItem, setaddItem] = useState([]);

  const addNote = (note) => {
    setaddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
          />
        );
      })}
    </>
  );
}

export default App;
