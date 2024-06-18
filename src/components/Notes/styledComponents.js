// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: #d8d8d8 10px 10px 10px 10px;
`

export const NotesContainer = styled.div`
  height: 200px;
  width: 500px;
  background-color: #ffffff;
  box-shadow: #cbd5e1 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #4c63b6;
  text-align: center;
`

export const Input = styled.input`
  height: 40px;
  background-color: white;
  border-color: white;
  border-width: 0px;
  border-radius: 5px;
  margin: 10px;
`
export const Button = styled.button`
  background-color: blue;
  color: white;
  height: 40px;
  width: 50px;
  border-radius: 5px;
  border-width: 0px;
  margin: 10px;
`
export const UList = styled.ul`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  margin: 10px;
`
