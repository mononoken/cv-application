import { v4 as uuidv4 } from "uuid";

export class Education {
  constructor(school = "", degree = "", startDate = "", endDate = "") {
    this.id = uuidv4();
    this.school = school;
    this.degree = degree;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
