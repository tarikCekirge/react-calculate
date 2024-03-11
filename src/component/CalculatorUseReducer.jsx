import { useReducer } from "react";
import "./Calculator.css";
import { reducer, initialState } from "../reducers/reducerCalculator";

const CalculatorUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberChange = (e) => {
    const { id, value } = e.target;
    if (id === "number1") {
      dispatch({ type: "SET_NUMBER1", payload: parseInt(value) });
    } else if (id === "number2") {
      dispatch({ type: "SET_NUMBER2", payload: parseInt(value) });
    }
  };

  const addNumbers = () => {
    const result = state.number1 + state.number2;
    dispatch({ type: "SET_RESULT", payload: result });
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <div className="calculator-container">
        <h1>useReducer</h1>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="number1" className="fom-label">
              Number 1
            </label>
            <input id="number1" type="number" className="form-input" value={state.number1} onChange={(e) => handleNumberChange(e)} />
          </div>
          <div className="form-group">
            <label htmlFor="number2" className="fom-label">
              Number 1
            </label>
            <input id="number2" type="number" className="form-input" value={state.number2} onChange={(e) => handleNumberChange(e)} />
          </div>
          <button className="form-button" onClick={addNumbers}>
            Add
          </button>
          <div className="form-group">
            <label htmlFor="result" className="fom-label">
              Result
            </label>
            <input id="result" type="number" className="form-input" value={state.result} readOnly />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorUseReducer;
