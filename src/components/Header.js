import { useEffect,useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {


const [title, setTitle] = useState("");

const addTodo = () => {
	  const newTodo = {title, done: false}

	  fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			setTitle("")
			window.location.reload();
			setTimeout(() => {
				alert('new todo added.')
			}, 500)
        });
  }
    
    return (
        <div id="todo-header" className="header">
            <h2>Simple Todo App </h2>
          	<input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <span className="add-button" onClick={addTodo}>Add</span>
        </div>
    );
}

export default Header;