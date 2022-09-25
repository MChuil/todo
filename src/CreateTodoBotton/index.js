import React from "react";
import './CreateTodoButton.css';

function CreateTodoBotton(props){
    const onClickButton = () =>{
        //prevState da el estado anterior al cambio que vamos a hacer
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={ onClickButton}
        >+</button>
    );
}

export { CreateTodoBotton }