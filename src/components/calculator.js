import React from 'react';
import Display from './display';

function Calculator() {
  return (
    <div className="main-container">
      <table id="calc-table">
        <tbody id="table-body" className="table-body">
          <tr className="tr1">
            <td colSpan="4">
              <Display />
            </td>
          </tr>
          <tr>
            <td><button type="button" className="others">AC</button></td>
            <td><button type="button" className="others">+/-</button></td>
            <td><button type="button" className="others">%</button></td>
            <td><button type="button" className="operators">÷</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others">7</button></td>
            <td><button type="button" className="others">8</button></td>
            <td><button type="button" className="others">9</button></td>
            <td><button type="button" className="operators">x</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others">4</button></td>
            <td><button type="button" className="others">5</button></td>
            <td><button type="button" className="others">6</button></td>
            <td><button type="button" className="operators">-</button></td>
          </tr>
          <tr>
            <td><button type="button" className="others">1</button></td>
            <td><button type="button" className="others">2</button></td>
            <td><button type="button" className="others">3</button></td>
            <td><button type="button" className="operators">+</button></td>
          </tr>
          <tr>
            <td colSpan="2"><button type="button" className="others">0</button></td>
            <td><button type="button" className="others">.</button></td>
            <td><button type="button" className="operators">=</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Calculator;
