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
  total: PropTypes.number.isRequired,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  operation: '',
  next: '',
};

export default Display;
