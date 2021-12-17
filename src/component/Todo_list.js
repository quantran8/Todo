import React from 'react';
import Todo from './Todo';
const TodoList = (props) => {
  return (
    <div>
      {props.filter.map((item, index) => {
        return (
          <Todo
            key={index}
            title={item.title}
            date={item.date}
            todos={props.todo}
            todo={item}
            setTodo={props.setTodo}
            setedit={props.setedit}
            check={props.check}
            setcheck={props.setcheck}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
