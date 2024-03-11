import "./App.css";
import Calculator from "./component/Calculator";
import CalculatorUseReducer from "./component/CalculatorUseReducer";

function App() {
  return (
    <>
      <div className="App">
        <Calculator />
        <CalculatorUseReducer />
      </div>
    </>
  );
}

export default App;
