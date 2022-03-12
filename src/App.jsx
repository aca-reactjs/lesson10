import { useState, useEffect } from "react";

import List from "./components/List";
import ListForm from "./components/ListForm";

import styles from "./app.module.css";

function App() {
  const [listItems, setListItems] = useState([
    { title: "something" },
    { title: "anything" },
  ]);

  const handleListFormSubmit = (value) => {
    setListItems((prev) => [...prev, { title: value }]);
  };

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <div className={styles.app}>
      <ListForm onSubmit={handleListFormSubmit} />
      <List listItems={listItems} />
    </div>
  );
}

export default App;
