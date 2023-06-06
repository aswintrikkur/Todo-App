import React, { useEffect, useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem/TodoItem'

export const Todo = () => {
    const [todoContent, setTodoContent] = useState([])
    // const [newindex,setIndex]=useState([]);      //to solve issue with same task name
    const [tempContent, setTempContent] = useState("")
    const [editSection, setEditSection] = useState([]);

    useEffect(() => {
        const newArray = Array(10).fill(false);
        setEditSection(newArray);
    }, [])
    // console.log(editSection);



    const inputHandleOnChange = (event) => {
        setTempContent(event.target.value);
    }

    // For todo-Item adding
    const handleInputOnAdd = () => {
        setTodoContent(prev => [...prev, tempContent])
        setTempContent("");
    }

    // For todo-Item deleting
    const deleteCurrentItem = (index) => {
        todoContent.splice(index, 1);
        const filteredContent = todoContent.filter((data) => {
            return data;
        })
        setTodoContent(filteredContent);
    }
    // useEffect(()=>{

    // },[editSection])

    // For todo-Item editing
    const handleItemEdit = (index) => {

        // //trail 1
         setEditSection(prev => {
            prev.splice(index, 1, (prev[index] === false ? true : false))
            console.log('editSection', prev);
            return prev;
        });     
        // setEditSection(prev=>prev.filter(data=>data));

        //trail 2
        // const updatedState= editSection.splice(index, 1, (editSection[index] === false ? true : false))
        // console.log('editSection: ',editSection);
        // console.log('updatedState: ',updatedState);
        // setEditSection(prev=>prev);
        // const filterData = editSection.map((data) => {
        //     console.log(data);
        //     return data
        // })
        // setEditSection(filterData);
    }
    // console.log('editSection',editSection);
    // console.log('todoContent',todoContent);

    return (
        <div>
            <div className="todo-container">
                <h2>Todo List</h2>

                <div className="input-container">
                    <input type="text" name="newTodo" value={tempContent} id="newTodo" placeholder='New Todo' onChange={inputHandleOnChange} />
                    <button type='submit' onClick={handleInputOnAdd} >ADD TODO</button>

                </div>
                <div className="todo-list" >

                    {todoContent.map((data) => {
                        const index = todoContent.indexOf(data);

                        return <TodoItem todoContent={data}
                            deleteCurrentItem={() => { deleteCurrentItem(index) }}
                            handleItemEdit={() => { handleItemEdit(index) }}
                            index={index}
                            editSection={editSection[index]}
                            key={index} >

                            <div className="edit-todo" /* children */>
                                <input type="text" name="" id="edit-item" placeholder='Editing current todo item' />
                                <button type='save' className='save'> save</button>
                                <button type='reset' className='cancel' onClick={() => { handleItemEdit(index) }}> cancel</button>
                            </div>
                        </TodoItem>
                    })}
                </div>


            </div>

        </div>
    )
}

