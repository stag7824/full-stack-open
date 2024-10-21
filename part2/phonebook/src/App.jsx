import { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')


  const onNameChange = (e) => {
    setNewName(e.target.value)
  }
  const onNumberChange = (e) => {
    setNewNumber(e.target.value);
  }
  const addPerson = (e) => {
    e.preventDefault();
    // console.log("flat", persons.flat());
    const namesArray = persons.map((value) => value.name);
    // console.log("namesArray", namesArray);
    if (namesArray.includes(newName))
      return alert(`${newName} already added to the phonebook!`)
    // console.log("form Value", e.target);
    setPersons(persons.concat({ name: newName, number: newNumber }))
  }

  const search = (e) => {
    setSearchValue(e.target.value)

  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} searchValue={searchValue} />
      <PersonForm addPerson={addPerson} newName={newName} onNameChange={onNameChange} newNumber={newNumber} onNumberChange={onNumberChange} />
      <Persons persons={persons} searchValue={searchValue}></Persons>
    </div>
  )
}

export default App