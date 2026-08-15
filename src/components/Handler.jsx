import styles from './Handler.module.css'
import LeftBar from './LeftBar/LeftBar';
import NotesDisplay from './NotesDisplay/NotesDisplay';
import RightBar from './RightBar/RightBar';
import { useState } from 'react';




function Handler() {

  const [note, setNote] = useState([])
  const [search, setSearch] = useState('')
  const [idIndex, setIdIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className={styles.container}>
      <LeftBar setNote={setNote} setSearch={setSearch} idIndex={idIndex} setIdIndex={setIdIndex}/>
      <NotesDisplay note={note} search={search} setSelectedId={setSelectedId}/>
      <RightBar note={note} setNote={setNote} selectedId={selectedId} setSelectedId={setSelectedId}/>
    </div>
  );
}

export default Handler