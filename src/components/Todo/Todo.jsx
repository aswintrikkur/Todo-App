import React, { useEffect, useState } from 'react'
import './Todo.css'
import { TodoItem } from './TodoItem/TodoItem'



export const Todo = () => {
    const [todoContent, setTodoContent] = useState([])
    // const [newindex,setIndex]=useState([]);      //to solve issue with same task name
    const [tempContent, setTempContent] = useState("")
    const [tempContent2, setTempContent2] = useState("")
    const [editSection, setEditSection] = useState([]);

    // useEffect(() => {
    //     const newArray = Array(10).fill(false);
    //     setEditSection(newArray);
    // }, [])
    // console.log(editSection);



    const inputHandleOnChange = (event) => {
        setTempContent(event.target.value);
    }



    // For todo-Item adding
    const handleInputOnAdd = () => {
        setTodoContent(prev => [...prev, tempContent])
        setTempContent("");
        setEditSection([...editSection, false])
    }

    // For todo-Item deleting
    const deleteCurrentItem = (index) => {
        //trail 1        
        /*  todoContent.splice(index, 1);
            const filteredContent = todoContent.filter((data) => {
                return data;
            })
            setTodoContent(filteredContent);    */

        //trail 2
        const newTodoContent = [...todoContent];
        newTodoContent.splice(index, 1);
        setTodoContent(newTodoContent);

        editSection.splice(index, 1);
        setEditSection([...editSection])
    }

    // For todo-Item editing - step1
    const inputHandleOnChange2 = (index,event) => {
        // setTempContent2(event.target.value);
        console.log(index)
        console.log(event.target.value);

        const editedValue = [...todoContent];
        editedValue[index]=event.target.value;
        setTodoContent(editedValue);
    }
    // For todo-Item deleting - step2
    const handleItemEdit = (index) => {
        //trail ChatGPT (success)
        setEditSection(prev => {
            const newEditSection = [...prev]; // Create a copy of the state array
            newEditSection[index] = !newEditSection[index]    // Update the value at the given index
            return newEditSection;
        })

        // //trail 1 (failed)       
        /*  setEditSection(prev => {
            prev.splice(index, 1, (prev[index] =!prev[index]))
            prev.splice(index, 1, (editSection[index] === false ? true : false)) //not working
            // console.log('editSection', prev);
            return prev;
        });     
        // setEditSection(prev=>(prev.filter(data=>data)));  //not rendering without 2nd setEditSection()
        */

        //trail 2 (failed)
        /* const updatedState= editSection.splice(index, 1, (editSection[index] === false ? true : false))
        console.log('editSection: ',editSection);
        console.log('updatedState: ',updatedState);
        setEditSection(prev=>prev);
        const filterData = editSection.map((data) => {
            console.log(data);
            return data
        })
        setEditSection(filterData);     */
    }

    //for saving edited value
    const handleSaveValue = (index) => {

        setEditSection(prev => {
            const newEditSection = [...prev]; // Create a copy of the state array
            newEditSection[index] = !newEditSection[index]    // Update the value at the given index
            return newEditSection;
        })
    }

    // console.log('editSection', editSection);
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
                                <input type="text" name="" id="edit-item"
                                    value={todoContent[index]}
                                    onChange={(event)=>{inputHandleOnChange2(index,event)}}
                                    placeholder='Editing current todo item'
                                />
                                <button type='save' className='save'
                                    onClick={() => { handleSaveValue(index) }}> save</button>
                                <button type='reset' className='cancel'
                                    onClick={() => { handleItemEdit(index) }}> cancel</button>
                            </div>
                        </TodoItem>
                    })}
                </div>


            </div>

        </div>
    )
}

