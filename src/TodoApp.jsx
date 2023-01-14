import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  return (
    <>
      <h1>ToDo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <button
        onClick={() => {
          setTodoId(todoId - 1);
        }}
      >
        Previous ToDo
      </button>
      <button
        onClick={() => {
          setTodoId(todoId + 1);
        }}
      >
        Next ToDo
      </button>
      <pre>{JSON.stringify(todo)}</pre>
      {/* 
            <ul>
                { todos.map( todo => (
                    <li key={ todo.id }>
                        <strong> { todo.completed ? 'DONE' : 'Pending' } </strong> 
                        { todo.title }
                    </li>
                ) ) }
            </ul> */}
    </>
  );
};
