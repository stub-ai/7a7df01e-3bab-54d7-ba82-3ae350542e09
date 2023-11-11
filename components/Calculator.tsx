import React, { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number: number) => {
    if (operator === "") {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(secondNumber);
        break;
      default:
        return;
    }
    setResult(result.toString());
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <input type="text" readOnly value={firstNumber} className="border-2 border-gray-300 rounded mr-2 p-2" />
        <span className="mr-2">{operator}</span>
        <input type="text" readOnly value={secondNumber} className="border-2 border-gray-300 rounded mr-2 p-2" />
        <span>=</span>
        <input type="text" readOnly value={result} className="border-2 border-gray-300 rounded ml-2 p-2" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)} className="bg-blue-500 text-white rounded p-2">
            {number}
          </button>
        ))}
        {["+", "-", "*", "/"].map((operator) => (
          <button key={operator} onClick={() => handleOperatorClick(operator)} className="bg-red-500 text-white rounded p-2">
            {operator}
          </button>
        ))}
        <button onClick={calculate} className="col-span-4 bg-green-500 text-white rounded p-2">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Calculator;