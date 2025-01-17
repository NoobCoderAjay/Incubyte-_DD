import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (value: string) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div data-testid="calculator">
      <div data-testid="display">{display}</div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <button
            key={index}
            name={index.toString()}
            className="number-button"
            onClick={() => handleClick(index.toString())}
          >
            {index}
          </button>
        ))}

        {["+", "-", "×"].map((operator) => (
          <button
            key={operator}
            name={operator}
            className="operator-button"
            onClick={() => handleClick(operator)}
          >
            {operator}
          </button>
        ))}

        <button
          name="="
          className="equals-button"
          onClick={() => handleClick("=")}
        >
          =
        </button>
        <button
          name="C"
          className="clear-button"
          onClick={() => handleClick("C")}
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
