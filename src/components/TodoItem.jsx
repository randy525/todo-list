import {useRef, useState} from "react";

export default function TodoItem({item, removeItem, editItem, setDone}) {

    const titleText = useRef();
    const titleInput = useRef();
    const editButton = useRef();
    const [isEdit, setEdit] = useState(false);


    function onEditButtonClick() {
        titleText.current.style.display = 'none';
        titleInput.current.style.display = 'block';
        editButton.current.innerHTML = '✔️';
        setEdit(true);

        titleInput.current.value = item.title;
    }

    function onConfirmButtonClick() {
        titleText.current.style.display = 'block';
        titleInput.current.style.display = 'none';
        editButton.current.style.display = 'block';
        editButton.current.innerHTML = '✏️';
        setEdit(false);

        editItem(titleInput.current.value);
    }

    function onSetDoneClick() {
        setDone(!item.done);
    }

    return (
        <div className="todo-item">
            <div className="crossed-line" style={!item.done ? {display: 'none'} : {}}></div>
            <button
                className={(item.done ? 'button-done ' : '') + 'button round-button'}
                onClick={onSetDoneClick}
            >✔️</button>
            <div ref={titleText}>{item.title}</div>
            <input type="text" className="todo-title todo-title-input" style={{display: 'none'}} ref={titleInput}/>
            <div style={{display: "flex"}}>
                <button
                    className="button round-button"
                    ref={editButton}
                    onClick={isEdit ? onConfirmButtonClick : onEditButtonClick}
                >✏️</button>
                <button
                    className="button round-button"
                    onClick={() => removeItem(item.id)}
                >➖</button>
            </div>
        </div>
    );
}