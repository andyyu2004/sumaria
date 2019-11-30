import React from 'react'

const ErrorView = props => {
  const { error } = props;
  return (
    <div>
      <h5>Error: {error}</h5>
    </div>
  );
};

export default ErrorView;
