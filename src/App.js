import React, { useState } from "react";
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import Note from './components/Note';

function App() {
  const [addItem, setaddItem]=useState([]);

  const addNote =(note)=>{
    // alert("note is added")
    setaddItem((prevData)=>{
      return [...prevData, note]
    })
    console.log(note)
  }
  return (
    <>
      <Header/>
      <CreateNote passNote={addNote} />
      <Note/>
    </>
  );
}

export default App;
