import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

 const[isExpanded, setExpanded] = useState(false);
 const[note, setNote] = useState({
  title:"",
  content:""
 })

 function handleChange (event){
  const{name, value} = event.target;

  setNote(prevNote =>{
    return {
      ...prevNote,
      [name]: value
    };
  });
 }

 function submitNote(event){
  props.onAdd(note);
  event.preventDefault();
  setNote({
    title:"",
    content:""
  });
 }

 function expanded(){
  setExpanded(true);
 }

  return (
    <div>
      <form>

        {isExpanded && <input 
        onChange={handleChange} 
        name="title" placeholder="Title" 
        value={note.title} />}
        

        <textarea 
        onChange={handleChange} 
        onClick={expanded}
        name="content" placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1}
        value={note.content}/>

        <Fab
        className="fab"
        onClick={submitNote}
        >
          <AddCircleIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
