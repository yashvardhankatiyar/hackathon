import React from 'react';

const Cards = ({ deets, value, onChange }) => {
  return (
    <>
      <div className="heading-com">{deets}</div>
      <input
        type="text"
        className="Cards-input"
        value={value || ''} // Provide a default value to prevent the warning
        onChange={onChange}
      />
    </>
  );
}

export default Cards;
