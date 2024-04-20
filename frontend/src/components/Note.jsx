// import React from "react";
import "../styles/Notes.css"

function Note({ note, onDelete }) {
    return <div className="note-container">
        <p className="note-title">{note.title}</p>
        <p className="note-content">{note.content}</p>
        <button className="delete-button" onClick={()=>onDelete(note.id)}>Delete note</button>
    </div>
}


export default Note