import React, { useEffect, useState } from 'react'
import './TodoItem.css'

export const TodoItem = ({ todoContent, deleteCurrentItem, handleItemEdit, index }) => {
    const [completed, setCompleted] = useState({})


    const handleComplete = (event) => {
        if(event.target.checked){
            setCompleted({textDecoration: 'line-through'});
            // const textModify = event.target.style.textDecoration;
            // event.target.style.textDecoration = textModify === "line-through" ? "none" : "line-through";
        }else{
            setCompleted({textDecoration: 'none'});
        }
    }

    return (
        <div>
            <div className="todo-item" >
                <div className="todo-label" >
                    <input type="checkbox" name="" id={index} onClick={handleComplete}/>
                    <label htmlFor={index} style={completed} > {todoContent} </label>
                </div>
                <div className="todo-buttons">
                    <button onClick={handleItemEdit}><img src='../src/Images/image 7.png' alt="edit" /></button>
                    <button onClick={deleteCurrentItem}><img src='../src/Images/image 9.png' alt="delete" /></button>
                </div>
            </div>

        </div>
    )
}

