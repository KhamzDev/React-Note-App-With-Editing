import styles from './RightBar.module.css'



function RightBar({ note, setNote, selectedId, setSelectedId }) {

  

  function handleSubmit(e){
    e.preventDefault()

    const elements = e.target.elements
    const titleVal = elements.title.value
    const descriptionVal = elements.description.value 

    setNote(p => p.map((item) => item.id === selectedId ? {...item, title: titleVal, description: descriptionVal} : item))
  }


  return (
    <div className={styles.container}>

      {selectedId !== null ? (

          <form key={selectedId} className={styles.modify_container} onSubmit={handleSubmit}>

          <div className={styles.title_c}>
            <p>Title:</p>
            <textarea name='title' defaultValue={note[selectedId].title} maxLength={30} required></textarea>
          </div>
          
          <div className={styles.desc_c}>
            <p>Description</p>
            <textarea name='description' defaultValue={note[selectedId].description} maxLength={250} required></textarea>
          </div>

          <div className={styles.btn_c}>
            <button type='submit' className={styles.submit_btn}>Change</button>
            <button onClick={() => setSelectedId(null)} className={styles.cancel_btn}>Cancel</button>
          </div>

        </form>
        ) : null}
      
    </div>
  )
}

export default RightBar