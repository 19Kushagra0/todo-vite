import styles from './App.module.css'

function App() {
  // Static HTML/JSX structure - no JS logic as requested!
  
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>My Tasks</h1>
      
      <div className={styles.inputGroup}>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="What needs to be done?" 
        />
        <button className={styles.addButton}>Add Task</button>
      </div>

      <ul className={styles.todoList}>
        {/* Example of an active task */}
        <li className={styles.todoItem}>
          <div className={styles.todoContent}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.todoText}>Design premium UI</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        </li>

        {/* Example of a completed task */}
        <li className={styles.todoItem}>
          <div className={styles.todoContent}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            <span className={styles.todoTextCompleted}>Setup Vite React project</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        </li>

        {/* Example of another active task */}
        <li className={styles.todoItem}>
          <div className={styles.todoContent}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.todoText}>Write JavaScript logic</span>
          </div>
          <div className={styles.actions}>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default App
