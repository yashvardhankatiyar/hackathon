import React from 'react';
import './Container.css'; // Make sure to import or define your CSS file

const Container = (props) => {
  return (
    <div className="center-container">
      {props.children}
    </div>
  );
}

export default Container;
