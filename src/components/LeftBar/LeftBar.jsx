import { useRef, useState } from 'react'
import styles from './LeftBar.module.css'


function LeftBar({ setNote, setSearch, idIndex, setIdIndex }) {

  const [toggle, setToggle] = useState(false);
  
  const formRef = useRef(null)

  function handleSubmit(e){
    e.preventDefault()

    const elements = e.target.elements

    const titleValue = elements.title.value
    const descriptionValue = elements.description.value

    setNote(p => [...p, {id: idIndex, title: titleValue, description: descriptionValue}])
    setIdIndex(p => p + 1)

    if(formRef.current){
      formRef.current.reset()
    }
  }

  return (
    <div className={styles.container}>
        <div onClick={() => setToggle(!toggle)} className={styles.add_btn}>{toggle === false ? 'Add New Note' : 'Cancel'}</div>

        {toggle === true ?
          <form ref={formRef} className={styles.submit} onSubmit={handleSubmit}>
            <textarea className={styles.title} name='title' placeholder='Enter Title' maxLength={30} required/>
            <textarea className={styles.description} name='description' placeholder='Enter Description' maxLength={150} required/>
            <button className={styles.enter_btn} type='submit'>Enter</button>
          </form> 
        : null}

        <div className={styles.input_c}>
          <h3>Search Notes Here:</h3>
          <input onChange={(e) => setSearch(e.target.value)} placeholder='Search notes...'></input>
        </div>

    </div>
    
  )
}

export default LeftBar