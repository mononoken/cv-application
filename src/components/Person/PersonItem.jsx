import { useState } from "react";
import { Person } from "./Person";

export function PersonItem() {
  const [person, setPerson] = useState(
    new Person("Samwise Gamgee", "sam@shire.com", "555-3737"),
  );
  const [editable, setEditable] = useState(true);

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  return (
    <>
      {editable ? (
        <PersonForm person={person} setPerson={setPerson} />
      ) : (
        <PersonView person={person} />
      )}
      <button onClick={toggleEditable}>{editable ? "Save" : "Edit"}</button>
    </>
  );
}

function PersonForm({ person, setPerson }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={person.email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={person.phone}
        onChange={handleChange}
      />
    </form>
  );
}

function PersonView({ person }) {
  return (
    <>
      <h1>{person.name}</h1>
      <div>{person.email}</div>
      <div>{person.phone}</div>
    </>
  );
}
