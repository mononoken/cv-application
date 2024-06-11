import { v4 as uuidv4 } from "uuid";

export class Experience {
  constructor(title = "", employer = "", startDate = "", endDate = "") {
    this.id = uuidv4();
    this.title = title;
    this.employer = employer;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
