import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

export default function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note)
  };

  const addEvent=(note)=>{
    props.passNote()
     
     
  }
  return (
    <>
      <div className="CreateNote">
        <form>
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={inputEvent}
            placeholder="Title"
          />
          <textarea
            name=""
            id=""
            value={note.content}
            name="content"
            onChange={inputEvent}
            cols="30"
            rows="10"
            placeholder="Write your task.."
          >
            {" "}
          </textarea>
          <button onClick={addEvent}>+</button>
        </form>
      </div>
    </>
  );
}
