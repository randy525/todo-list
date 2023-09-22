import '../styles/Todo.css'
import {useRef} from "react";
export default function AddTodoItemForm({addItem}) {

    const title = useRef();

    function onButtonClick(e) {
        e.preventDefault();
        if (title.current.value.trim().length > 0) {
            addItem(title.current.value)
        }
        title.current.value = '';
    }

    return (
        <form className="add-form">
            <input className="todo-title todo-title-input" name="title" ref={title}/>
            <button className="button" onClick={onButtonClick}>Add</button>
        </form>
    );
}