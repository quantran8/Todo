import React, { useEffect, useState } from 'react';

const From = (props) => {
  const [input, setinput] = useState('');
  const [error, seterror] = useState('');
  const [text, settext] = useState('Add');
  useEffect(() => {
    console.log(props.setedit);
    if (props.setedit === undefined || !props.setedit.check) {
      props.set();
      setinput('');
    } else if (props.setedit) {
      console.log(props.setedit);
      setinput(props.setedit.title);
      settext('Update');
    }

    return () => {
      settext('Add');
    };
  }, [props.setedit]);
  const onchange = (e) => {
    let vl = e.target.value;
    setinput(vl);
  };
  const add = (e) => {
    if (input != '') {
      props.inputValue(input);
      setinput('');
      seterror('');
    } else seterror('bạn chưa nhập công việc cần thêm');
  };
  const Enter = (e) => {
    if (e.keyCode === 13) {
      add();
    }
  };
  const setstatus = (e) => {
    props.setStatus(e.target.value);
    seterror('');
  };
  return (
    <div className="form">
      <button onClick={add}>{text}</button>
      <input
        placeholder=" To do....."
        onKeyUp={Enter}
        value={input}
        type="text"
        onChange={onchange}
      ></input>

      <select
        className="form-select"
        aria-label="Default select example"
        onChange={setstatus}
      >
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Uncomplete">Uncomplete</option>
      </select>
      <h5 style={{ color: 'red' }}>{error}</h5>
    </div>
  );
};
export default From;
