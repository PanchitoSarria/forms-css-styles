import styles from './TodoList.module.scss'

const TodoList = ({ todos }) => {

  return (
    <ul className={styles.todoList}>
        {
            todos.map(todo => {
                const {text, date, complete} = todo
                return (
                    <li key={date} className={styles.listItem}>
                        <div>
                            <input type="checkbox" value={complete}/>
                            <p>{text}</p>
                        </div>
                        <p>{date}</p>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default TodoList