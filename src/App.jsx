import styles from "./app.module.css";

import useCalculator from "./hooks/useCalculator.hook";

function App() {
  const { decrement, increment, state } = useCalculator();

  return (
    <div className={styles.app}>
      <div className={styles.screen}>{state}</div>
      <div className={styles.buttonWrapper}>
        <button onClick={() => increment()} className={styles.button}>
          +
        </button>
        <button onClick={() => decrement()} className={styles.button}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
