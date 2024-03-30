import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {

    const dispatch = useDispatch();

    function addTodoList() {
        const todo = document.getElementById('todoTxt').value;
        dispatch(addTodo(todo));

    }
    return (
        <div className="container  text-center">
            <h2>Add Todo</h2>
            <div className='row justify-content-center mt-3'>

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