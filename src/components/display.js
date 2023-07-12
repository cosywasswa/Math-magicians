import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { total, operation, next } = props;

  return (
    <div className="result-container" data-testid="display-div">
      <span>
        {total}
      </span>
      <span data-testid="operation">
        {operation}
      </span>
      <span>
        {next}
      </span>
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  total: 0,
  operation: '',
  next: '',
};

export default Display;
