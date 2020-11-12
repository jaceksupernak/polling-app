import React from 'react';

const Poll = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div>
        <input type="radio" />
        <label>{option.response}</label>
      </div>
    );
  });
  return (
    <div>
      <div className="container">
        <h3 className="heading">
          Which Javascript framework do you currently prefer?
        </h3>
        <div>{renderedOptions}</div>
      </div>
    </div>
  );
};

export default Poll;
