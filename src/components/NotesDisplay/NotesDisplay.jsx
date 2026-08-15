import styles from './NotesDisplay.module.css'



function NotesDisplay({ note, search, setSelectedId }) {
  return (
    <div className={styles.container}>
        <div className={styles.note_container}>

          {note.filter((item) => {
            return search.toLowerCase() === '' ? item : item.title.
            toLowerCase().includes(search)
          }).map((item, index) => (
            <div key={index} className={styles.note} onClick={() => setSelectedId(index)}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            
          ))}
          
        </div>
    </div>
  )
}

export default NotesDisplay