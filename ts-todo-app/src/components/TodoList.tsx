import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

interface TodoProps {
  id: number;
  content: string;
  isToggle: boolean;
}

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState<TodoProps[]>([
    {
      id: 1,
      content: "목록 1",
      isToggle: false,
    },
    {
      id: 2,
      content: "목록 2",
      isToggle: false,
    },
  ]);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputCheckHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TodoProps = {
      id: Date.now(),
      content: inputValue,
      isToggle: false,
    };

    setTodo([...todo, newTodo]);
    setInputValue("");
  };

  const deleteHandler = (id: number) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      {todo.map((item) => (
        <TodoItem
          id={item.id}
          key={item.id}
          content={item.content}
          isToggle={item.isToggle}
          onDeleted={deleteHandler}
        />
      ))}
      <TodoForm
        onChange={inputChangeHandler}
        onSubmit={inputCheckHandler}
        inputValue={inputValue}
      />
    </main>
  );
}

export default TodoList;
