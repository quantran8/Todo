import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/Todo_list';
import Footer from './component/footer';
function App() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState('All');
  const [filter, setFilter] = useState(todo);
  const [edit, setedit] = useState();
  //------------------switch status----------------------
  const fill = () => {
    switch (status) {
      case 'All':
        setFilter(
          todo.filter((item) => {
            return item;
          }),
        );
        break;
      case 'Complete':
        setFilter(
          todo.filter((item) => {
            return item.complete === true;
          }),
        );
        break;

      case 'Uncomplete':
        setFilter(
          todo.filter((item) => {
            return item.complete === false;
          }),
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    fill();
  }, [status, todo]);

  useEffect(() => {
    let storage = localStorage.getItem('Todos')
      ? JSON.parse(localStorage.getItem('Todos'))
      : [];
    setTodo([...storage]);
  }, []);
  const getday = (d) => {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'september',
      'november',
      'october',
      'december',
    ];
    const day = days[d.getDay() - 1];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return ` ${day}, ${date}, ${month}, ${year}`;
  };
  // ------------------check update or add--------------------

  const getinputvalue = (value) => {
    if (edit === undefined) {
      let ar = [
        ...todo,
        {
          id: Math.random(),
          title: value,
          complete: false,
          check: false,
          date:getday(new Date())
        },
      ];
      setTodo(ar);
      localStorage.setItem('Todos', JSON.stringify(ar));
    } else {
      let ar = todo.map((item) => {
        if (item.id === edit.id)
          return {
            ...item,
            title: value,
            check: false,
          };
        return item;
      });
      setedit();
      setTodo(ar);
      localStorage.setItem('Todos', JSON.stringify(ar));
    }
  };
  return (
    <div className="App">
      <h1>To do list</h1>
      <Form
        setedit={edit}
        set={setedit}
        setStatus={setStatus}
        inputValue={getinputvalue}
      />

      <TodoList
        setedit={setedit}
        setStatus={setStatus}
        filter={filter}
        todo={todo}
        setTodo={setTodo}
      />
      <Footer settodo={setTodo} />
    </div>
  );
}

export default App;
