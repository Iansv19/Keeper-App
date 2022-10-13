import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const[notesGroup, setNotesGroup] = useState([]);

  function addNotes(note){
    setNotesGroup(prevNotesGroup =>{
      return[
        ...prevNotesGroup,
        note
      ];
    });
  }
  function deleteNote(id){
    setNotesGroup(prevNotesGroup => {
      return prevNotesGroup.filter((note,index)=>{
        return index !==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notesGroup.map((notes, index) => {
        return(
        <Note 
        key={index} 
        id={index}
        title={notes.title}
        content={notes.content} 
        deleteNotes={deleteNote}
        />
        )
      })
      }
      <Footer />
    </div>
  );
}

export default App;
