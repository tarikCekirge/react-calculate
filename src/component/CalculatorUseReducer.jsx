import { useReducer } from "react";
import "./Calculator.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload };
    case "SET_NUMBER2":
      return { ...state, number2: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "CLEAR":
      return { ...state, number1: initialState.number1, number2: initialState.number2 };
    default:
      throw new Error("Invalid action type");
  }
};

const initialState = {
  number1: 0,
  number2: 0,
  result: 0,
};

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
