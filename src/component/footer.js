import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  const clear = () => {
    if (window.confirm('Do you want clear all ?')){
      props.settodo([])
      localStorage.setItem('Todos',JSON.stringify([]))
    };
  };
  return (
    <div>
      <button onClick={clear}>Clear All</button>
    </div>
  );
}

export default Footer;
