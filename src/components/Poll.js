import React from 'react';

const Poll = () => {
  return (
    <div>
      <div className="container">
        <h3 className="heading">
          Which Javascript framework do you currently prefer?
        </h3>
        <div className="field">
          <input type="radio" />
          <label>Framework</label>
        </div>
      </div>
    </div>
  );
};

export default Poll;
