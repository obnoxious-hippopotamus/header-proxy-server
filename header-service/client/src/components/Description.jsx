// overview of movie
import React from 'react';

const Description = (props) => {
  return (
    <div className="headerDescription">
      <p>{props.description}</p>
    </div>
  );
};

export default Description;