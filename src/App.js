
import './App.scss';
import { useState } from 'react';

function App() {

  const buttons = [1, 2, 3 , '+' , 4, 5, 6, '*' , 7, 8 , 9 , '-', '/', 0 , '.', '=', 'C'];

  const [inputVal, setInput] = useState([]);
  const [prevVal, setPrev] = useState(0);

  const handleClick = (button) => {
    if (button === 'C') {
      clearScreen()
      return
    }
    if(button === '=') {
      const result = eval(inputVal.join('').toString());
      setPrev(result);
      clearScreen()
      return;
    }
    setInput([...inputVal, button])
  }

  const clearScreen = () => {
    setInput('')
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="display-value"> 
            <p> {prevVal} </p> 
            <p>{inputVal}</p>
          </div>
        </div>
        <div className="keypad">
          {buttons.map((button, index) => (
            <button onClick={ () => handleClick(button)} key={index}> {button} </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
