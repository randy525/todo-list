import TodoItem from "./TodoItem";
import '../styles/Todo.css'
import {useState} from "react";
import AddTodoItemForm from "./AddTodoItemForm";
export default function TodoList() {

    const initialList = [
        {
            id: 1,
            title: "Stand up",
            done: false
        },
        {
            id: 2,
            title: "Brush teeth",
            done: false
        },
        {
            id: 3,
            title: "Have breakfast",
            done: false
        },
        {
            id: 4,
            title: "Go to work",
            done: false
        }
    ];

    const [todos, setTodos] = useState(initialList);

    function addItem(title) {
        const ids = todos.map(item => item.id);
        const newId = Math.max(...ids) + 1;
        const newItem = {
            id: newId,
            title: title,
            done: false
        }

        setTodos([...todos, newItem]);
    }
    function removeItem(id) {
        return setTodos(todos.filter(i => i.id !== id));
    }

    function editItem(id) {
        return function (title) {
            const newTodos = [...todos];
            const todoItem = newTodos.find(i => i.id === id);
            const index = newTodos.indexOf(todoItem);

            newTodos[index] = {
                ...todoItem,
                title: title
            }

            setTodos(newTodos);
        }
    }

    function setDone(id) {
        return function (done) {
            const newTodos = [...todos];
            const todoItem = newTodos.find(i => i.id === id);
            const index = newTodos.indexOf(todoItem);

            newTodos[index] = {
                ...todoItem,
                done: done
            }

            setTodos(newTodos);
        }
    }

    return (
        <div className="todo-list">
            <AddTodoItemForm addItem={addItem}/>
            <h2>To Do</h2>
            {todos.filter(item => !item.done).map((item) =>
                <TodoItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    editItem={editItem(item.id)}
                    setDone={setDone(item.id)}
                />)}
            <h2>Done</h2>
            {todos.filter(item => item.done).map((item) =>
                <TodoItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    editItem={editItem(item.id)}
                    setDone={setDone(item.id)}
                />)}
        </div>
    );
}