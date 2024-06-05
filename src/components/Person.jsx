import { useState } from "react";

class Person {
  constructor(name, email, phone) {
    this._name = name;
    this._email = email;
    this._phone = phone;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  get phone() {
    return this._phone;
  }

  set phone(newPhone) {
    this._phone = newPhone;
  }
}

export function PersonItem() {
  const [person, setPerson] = useState(new Person("sam", "@example", "555"));
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
