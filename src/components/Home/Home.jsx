import { useState, useEffect } from "react";
import styles from "../Home/Home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${todosPerPage}`
    )
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, [currentPage, todosPerPage]);

  const handlePagination = (page) => {
    setCurrentPage(page);
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${todosPerPage}`
    )
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  };

  const handleToggleView = () => {
    setIsGridView(!isGridView);
  };

  const totalButtons = Array.from(
    { length: Math.ceil(200 / todosPerPage) },
    (_, i) => (
      <button key={i} onClick={() => handlePagination(i + 1)} className={styles.btn}>
        {i + 1}
      </button>
    )
  );

  return (
    <div className={styles.container}>
      {isGridView ? (
        <div className={styles.grid}>
          {todos.map((todo) => (
            <div key={todo.id} className={styles.card}>
              <h3>
                <span className={styles.span}>Title</span> : {todo.title}
              </h3>
              <p>
                <span className={styles.span}>Status</span> :{" "}
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.list}>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <h3>
                  <span className={styles.span}>Title</span> : {todo.title}
                </h3>
                <p>
                  <span className={styles.span}>Status</span> :{" "}
                  {todo.completed ? "Completed" : "Not Completed"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleToggleView} className={styles.toggle}>
        {isGridView ? "List View" : "Grid View"}
      </button>
      <div>{totalButtons}</div>
    </div>
  );
};

export default Home;
