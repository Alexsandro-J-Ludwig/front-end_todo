import styles from './Task.module.css'

function Task(){
    return (
        <section className={styles.container_Task}>
            <div>
                <input className={styles.taskSearch} placeholder='tarefa...' autoComplete='off'></input>
            </div>

            <ol>
                <li>Task1</li>
                <li>Task2</li>
                <li>Task3</li>
            </ol>
      </section>
    )
}

export default Task