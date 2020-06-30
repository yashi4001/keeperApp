import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./note.jsx";


function App()
{
    
    const [notes,noteState]=React.useState([{title:"Note title",content:"Note content"}]);
    const [noteTitle,titleState]=React.useState("");
    const [noteBody,bodyState]=React.useState("");

    function changeTitle(event)
    {
        
        titleState(event.target.value);
        console.log(noteTitle);
    }

    function changeContent(event)
    {
        
        bodyState(event.target.value);
        console.log(noteBody)
    }

    function addNote()
    {
        noteState(function(prevState){
            return [...prevState,{title:noteTitle,content:noteBody }]
        });
        
    }

    // function display()
    // {
    //     notes.map(function(note){
    //        return( <Note item1={note.title} item2={note.content} />);
    //      });
    // }
    
    function display(event)
    {
        console.log(notes)
        event.preventDefault();
    }

    function deleteNote(id)
    {
        noteState(function(){
            return notes.filter(function(note,index){
                return index!==id
            })
        })
      
    }
    
    return (<div>
        <Header />
        <form onSubmit={display} >
        <input name="title" placeholder="Title" onChange={changeTitle} value={noteTitle} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={changeContent} value={noteBody} />
        <button onClick={addNote}>Add</button>
      </form>
      {notes.map(function(note,index){
           return( <Note item1={note.title} item2={note.content} delete={deleteNote} id={index} />);
         })}
      {/* {display} */}
         {/* {note.map(n => <Note title={n.title} content={n.content} />)} */}
        <Footer />
        
    </div>);
}

export default App;