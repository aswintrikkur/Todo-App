import React, { useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem/TodoItem'

export const Todo = () => {
    const [todoContent, setTodoContent] = useState([])



    const inputHandleOnBlur = (event) => {
        setTodoContent(prev => [...prev, event.target.value]);
    }

    const deleteCurrentItem = (key) => {
        todoContent.splice(key, 1);
        const filteredContent = todoContent.filter((data) => {
            return data;
        })
        setTodoContent(filteredContent);
    }

    // console.log(todoContent);

    return (
        <div>
            <div className="todo-container">
                <h2>Todo List</h2>

                <div className="input-container">
                    <input type="text" name="newTodo" id="newTodo" placeholder='New Todo' onBlur={inputHandleOnBlur} />
                    <button type='submit' >ADD TODO</button>
                </div>
                <div className="todo-list" >

                    {todoContent.map((data) => {
                        return (<TodoItem todoContent={data}
                            deleteCurrentItem={() => { deleteCurrentItem(todoContent.indexOf(data)) }}
                            key={todoContent.indexOf(data)} />)
                    })}
                </div>


            </div>

        </div>
    )
}

