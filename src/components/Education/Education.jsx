export class Education {
  constructor(school = "", degree = "", startDate = "", endDate = "") {
    this._school = school;
    this._degree = degree;
    this._startDate = startDate;
    this._endDate = endDate;
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
