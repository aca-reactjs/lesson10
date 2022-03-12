import { useState } from "react";
import styles from "./app.module.css";

import useCalculator from "./hooks/useCalculator.hook";

function App() {
  const [inputValue, setInputValue] = useState(1);

  const { decrement, increment, state } = useCalculator();

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const handlePlusButtonClick = () => {
    increment(inputValue);
  };
  const handleMinusButtonClick = () => {
    decrement(inputValue);
  };

  return (
    <div className={styles.app}>
      <div className={styles.screen}>{state}</div>
      <div className={styles.buttonWrapper}>
        <button onClick={handlePlusButtonClick} className={styles.button}>
          +
        </button>
        <input
          type="number"
          className={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleMinusButtonClick} className={styles.button}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
