export class Education {
  static currentId = 0;

  constructor(school, degree, startDate, endDate) {
    this._id = ++Education.currentId;
    this._school = school;
    this._degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get id() {
    return this._id;
  }

  get school() {
    return this._school;
  }

  set school(newSchool) {
    this._school = newSchool;
  }

  get degree() {
    return this._degree;
  }

  set degree(newDegree) {
    this._degree = newDegree;
  }

  get startDate() {
    return this._startDate;
  }

  set startDate(newDate) {
    this._startDate = newDate;
  }

  get endDate() {
    return this._endDate;
  }

  set endDate(newDate) {
    this._endDate = newDate;
  }
}
