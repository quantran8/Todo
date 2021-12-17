import React, { useState, useEffect } from 'react';
import './todo.css';
const Todo = (props) => {
  // ------------------delete item---------------------
  const trash = () => {
    let rl = props.todos.filter((item) => {
      return item.id !== props.todo.id;
    });
    props.setTodo(rl);
    localStorage.setItem('Todos', JSON.stringify(rl));
  };
  // -----------------change item compelte status ---------------------
  const change = () => {
    let ar = props.todos.map((item) => {
      if (item.id === props.todo.id)
        return {
          ...item,
          complete: !item.complete,
        };
      return item;
    });
    props.setTodo(ar);
    localStorage.setItem('Todos', JSON.stringify(ar));
  };
  // ----------------------edit to do------------------
  const edit = () => {
    props.setTodo(
      props.todos.map((item) => {
        if (item.id === props.todo.id)
          return {
            ...item,
            check: !item.check,
          };
        return {
          ...item,
          check: false,
        };
      }),
    );
    let a = props.todos.find((item) => {
      return item.id === props.todo.id;
    });
    props.setedit({ ...a, check: !a.check });
  };

 
  return (
    <div>
      <div className={props.todo.check ? 'todo fix' : 'todo'}>
        <div className={props.todo.complete ? 'title active' : 'title'}>
          <h1>{props.title}</h1>
        </div>
        <div className="btn">
          <button onClick={change}>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={trash}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button onClick={edit}>
            <i className="far fa-edit"></i>
          </button>
        </div>
      </div>
      <p>( Created : {props.date} )</p>
    </div>
  );
};
export default Todo;
