import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesContainer,
  Heading,
  Input,
  Button,
  UList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNotes] = useState('')
  const [notesList, setList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }
  const onAddItem = event => {
    event.preventDefault()
    const newItem = {
      id: uuidv4(),
      title,
      note,
    }
    setList(prevCommentList => [...prevCommentList, newItem])

    setTitle('')
    setNotes('')
  }
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesContainer>
        <Input type="text" placeholder="Title" onChange={onChangeTitle} />
        <Input
          type="text"
          placeholder="Take a notes"
          onChange={onChangeNotes}
        />
        <Button onClick={onAddItem}>Add</Button>
      </NotesContainer>
      <Heading>My notes</Heading>
      <div>
        <UList>
          {notesList.map(eachnote => (
            <NoteItem items={eachnote} />
          ))}
        </UList>
      </div>
    </MainContainer>
  )
}
export default Notes
