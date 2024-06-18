import {Lists, ItemsContainer, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {items} = props
  const {title, note} = items
  return (
    <Lists>
      <ItemsContainer>
        <Title>{title}</Title>
        <Note>{note}</Note>
      </ItemsContainer>
    </Lists>
  )
}
export default NoteItem
