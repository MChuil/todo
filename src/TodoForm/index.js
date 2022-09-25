import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    //estado en local por que solo lo va usar este componente
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(newTodoValue.length>0){
            addTodo(newTodoValue) 
            setNewTodoValue('');
            setOpenModal(false);
        }
        
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Ej. Reunión con el contador"
                value = {newTodoValue}
                onChange = { onChange }
            >
            </textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}


export { TodoForm }