import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const addContact = (e) => {
    e.preventDefault();
    const obj = {
      name: newName,
    }

    /* // To compare the entire obj
    const obj = {
      name: newName.toLowerCase(),
    }
    const copy = {};

    const foundIndex = people.findIndex(person => {
      copy.name = person.name.toLowerCase();
      return JSON.stringify(copy) === JSON.stringify(obj);
    })

    console.log(foundIndex);
    */

    const foundIndex = people.findIndex(person => 
      person.name.toLowerCase() === obj.name.toLowerCase()
    )

    if(foundIndex >= 0){
      alert(`${newName} is already added to phonebook`);
      return
    }
    
    setPeople(people.concat(obj));
    setNewName('');
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {people.length < 1 
      ? '...' 
      : people.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App 