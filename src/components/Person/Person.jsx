export class Person {
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
