import React, { useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem/TodoItem'

export const Todo = () => {
    const [itemCount, setItemCount] = useState([])
    const [todoContent, setTodoContent] = useState([])

    const addNewItem = () => {
        if (itemCount.length < 5) {
            setItemCount(prev => [...prev, true]);
        }
    }
    const inputHandleOnBlur = (event) => {

        setTodoContent(prev => [...prev, event.target.value]);


    }

    const deleteCurrentItem=()=>{
        setItemCount(prev=>[prev.splice(1,0,false)]);
    }
    console.log(todoContent);

    return (
        <div>
            <div className="todo-container">
                <h2>Todo List</h2>

                <div className="input-container">
                    <input type="text" name="newTodo" id="newTodo" placeholder='New Todo' onBlur={inputHandleOnBlur} />
                    <button type='submit' onClick={addNewItem}>ADD TODO</button>
                </div>
                <div className="todo-list" >
                    {/* {itemCount[0] && <TodoItem todoContent={todoContent[0]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[1] && <TodoItem todoContent={todoContent[1]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[2] && <TodoItem todoContent={todoContent[2]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[3] && <TodoItem todoContent={todoContent[3]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[4] && <TodoItem todoContent={todoContent[4]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[5] && <TodoItem todoContent={todoContent[5]} deleteCurrentItem={deleteCurrentItem}/>}
                    {itemCount[6] && <TodoItem todoContent={todoContent[6]} deleteCurrentItem={deleteCurrentItem}/>} */}

                    {todoContent.map((data)=>{
                        return <TodoItem todoContent={data} deleteCurrentItem={deleteCurrentItem} key={data} />
                    })}
                </div>
                

            </div>

        </div>
    )
}

