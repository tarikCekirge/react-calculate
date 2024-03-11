import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [number, setNumber] = useState({
    number1: 0,
    number2: 0,
    result: 0,
  });

  const handleNumberChange = (e) => {
    const { id, value } = e.target;
    setNumber((prevState) => ({ ...prevState, [id]: value }));
  };

  const addNumbers = () => {
    const { number1, number2 } = number;
    const result = parseFloat(number1) + parseFloat(number2);
    setNumber((prevState) => ({ ...prevState, result }));
    setNumber({
      number1: 0,
      number2: 0,
      result,
    });
  };
  return (
    <>
      <div className="calculator-container">
        <h1>useState</h1>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="number1" className="fom-label">
              Number 1
            </label>
            <input id="number1" type="number" className="form-input" value={number.number1} onChange={(e) => handleNumberChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="number2" className="fom-label">
              Number 2
            </label>
            <input id="number2" type="number" className="form-input" value={number.number2} onChange={(e) => handleNumberChange(e)} />
          </div>
          <button className="form-button" onClick={addNumbers}>
            Add
          </button>
          <div className="form-group">
            <label htmlFor="result" className="fom-label">
              Result
            </label>
            <input id="result" type="number" className="form-input" value={number.result} readOnly />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
