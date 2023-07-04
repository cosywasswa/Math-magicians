import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './display';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handlePress = (e) => {
    const value = e.target.textContent;
    if (value === 'AC') {
      setState({ total: 0, next: null, operation: null });
    } else {
      setState(calculate(state, value));
    }
  };

  const { total, next, operation } = state;

  return (
    <div className="main-container">
      <table id="calc-table">
        <tbody id="table-body" className="table-body">
          <tr className="tr1">
            <td colSpan="4" className="result">
              <Display total={total} operation={operation} next={next} />
            </td>
          </tr>
          <tr>
            <td><button type="button" className="others" onClick={handlePress}>AC</button></td>
            <td><button type="button" className="others" onClick={handlePress}>+/-</button></td>
            <td><button type="button" className="others" onClick={handlePress}>%</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>÷</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others" onClick={handlePress}>7</button></td>
            <td><button type="button" className="others" onClick={handlePress}>8</button></td>
            <td><button type="button" className="others" onClick={handlePress}>9</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>x</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others" onClick={handlePress}>4</button></td>
            <td><button type="button" className="others" onClick={handlePress}>5</button></td>
            <td><button type="button" className="others" onClick={handlePress}>6</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others" onClick={handlePress}>1</button></td>
            <td><button type="button" className="others" onClick={handlePress}>2</button></td>
            <td><button type="button" className="others" onClick={handlePress}>3</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" className="others" onClick={handlePress}>0</button></td>
            <td><button type="button" className="others" onClick={handlePress}>.</button></td>
            <td><button type="button" className="operators" onClick={handlePress}>=</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Calculator;
