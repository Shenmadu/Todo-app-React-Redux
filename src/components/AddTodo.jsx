import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {

    const dispatch = useDispatch();

    function addTodoList() {

        const todo = document.getElementById('todoTxt').value;
        dispatch(addTodo(todo));

    }

    // const addTodoHandler = (e) => {
    //     e.preventDeafault();


    //     dispatch(addTodo(input));
    //     setInput('');
    // }

    return (
        <div className="container  ">
            <h2>Add Todo</h2>
            <div className='row'>
                {/* <input type="text" id='todoTxt' placeholder='Enter Todo...' 
                 onChange={(e) => setInput(e.target.value)}
                 /> */}
                <div className='col-3'>
                    <input type="text" id='todoTxt' class="form-control"></input>

                </div>
                <div class="col-auto">
                    <button className='btn btn-primary ms-2 ' onClick={addTodoList}>Add Todo</button>
                </div>


            </div>
        </div>


    )
}