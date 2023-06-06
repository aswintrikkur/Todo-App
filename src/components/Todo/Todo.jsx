import React, { useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem/TodoItem'

export const Todo = () => {
    const [todoContent, setTodoContent] = useState([])
    const [tempContent, setTempContent] = useState("")


    const inputHandleOnChange = (event) => {
        setTempContent(event.target.value);
    }

    // For todo-Item adding
    const handleInputOnAdd = () => {
        setTodoContent(prev => [...prev, tempContent])
        setTempContent("");
    }

    // For todo-Item deleting
    const deleteCurrentItem = (key) => {
        todoContent.splice(key, 1);
        const filteredContent = todoContent.filter((data) => {
            return data;
        })
        setTodoContent(filteredContent);
    }

    // For todo-Item editing
    const handleItemEdit = (key) => {

        // return (<div className="todo-item">
        //     <input type="text" name="" id="edit-item" placeholder='edit' />
        //     <button> Save</button>
        //     <button> Cancel</button>
        // </div> )
        return <TodoItem />
    }



    return (
        <div>
            <div className="todo-container">
                <h2>Todo List</h2>

                <div className="input-container">
                    <input type="text" name="newTodo" value={tempContent} id="newTodo" placeholder='New Todo' onChange={inputHandleOnChange} />
                    <button type='submit'  onClick={handleInputOnAdd} >ADD TODO</button>
                    
                </div>
                <div className="todo-list" >

                    {todoContent.map((data) => {
                        const index = todoContent.indexOf(data);
                        return (<TodoItem todoContent={data}
                            deleteCurrentItem={() => { deleteCurrentItem(index) }}
                            handleItemEdit={() => { handleItemEdit(index) }}
                            index={index}
                            key={index} />)
                    })}
                </div>


            </div>

        </div>
    )
}

