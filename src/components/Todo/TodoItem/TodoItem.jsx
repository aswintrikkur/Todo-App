import React, { useEffect, useState } from 'react'
import './TodoItem.css'

export const TodoItem = ({ todoContent, deleteCurrentItem }) => {


    const handleComplete = (event) => {
        const textModify = event.target.style.textDecoration;
        event.target.style.textDecoration = textModify === "line-through" ? "none" : "line-through";
    }

    return (
        <div>
            <div className="todo-item" onClick={handleComplete}>
                <p> {todoContent} </p>
                <div className="todo-buttons">
                    <button><img src='../src/Images/image 7.png' alt="edit" /></button>
                    <button><img src='../src/Images/image 9.png' alt="delete" onClick={deleteCurrentItem} /></button>
                </div>
            </div>

        </div>
    )
}

