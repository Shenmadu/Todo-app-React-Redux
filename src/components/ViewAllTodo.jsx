import { useSelector } from "react-redux"
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

export default function ViewAllTodo(){

    const todos=useSelector((state)=>state.todos);
    const dispatch = useDispatch();

    return(
        <div className="container text-center">
             <div className="row mt-5">
            <h3>Todos</h3>
            <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                     
                     <div>
                     {todo.text}
                     <button onClick={()=>(dispatch(removeTodo(todo.id)))} className="btn btn-danger ms-5 mb-3">delete</button>

                     </div>
                   
                </li>
               
               
            ))}

            </ul>
           

        </div>
        </div>
       
    )
}