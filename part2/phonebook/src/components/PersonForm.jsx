const PersonForm = ({addPerson,newName,onNameChange,newNumber, onNumberChange}) => {
    return (<>
    <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={onNameChange} /> </div>
        <div>number: <input value={newNumber} onChange={onNumberChange} type='number' /> </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>)
}

export default PersonForm;