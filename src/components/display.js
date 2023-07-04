import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { total, operation, next } = props;

  return (
    <div className="result-container">
      <span>
        {total}
      </span>
      <span>
        {operation}
      </span>
      <span>
        {next}
      </span>
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;
