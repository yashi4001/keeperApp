import React from "react";

function Note(props)
{
    return (
        <div className="note">
            <h3>{props.item1}</h3>
            <p>{props.item2}</p>
            <button onClick={function(){
                props.delete(props.id);
            }}>DELETE</button>
        </div>
    )
}

export default Note;