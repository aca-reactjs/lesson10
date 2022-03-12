import { useContext } from "react";

import styles from "../app.module.css";

function List({ listItems }) {
  return (
    <ul>
      {listItems.map((el, idx) => (
        <li key={idx}>{el.title}</li>
      ))}
    </ul>
  );
}

export default List;
