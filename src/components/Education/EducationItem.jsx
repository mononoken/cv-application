import { useState } from "react";
import { Education } from "./Education";

export function EducationItems() {
  const [educations, setEducations] = useState([
    new Education(
      "University of Greenhill",
      "Bachelor of Science in Backpacking",
      "September 22, 3001",
      "May 1, 3004",
    ),
    new Education(
      "University of W",
      "Bachelor of Science in CS",
      "September 22, 2024",
      "June 8, 2025",
    ),
  ]);

  const [editable, setEditable] = useState(true);

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  return (
    <div>
      <ul id="education-forms">
        {educations.map((education, index) =>
          editable ? (
            <li key={index}>
              <EducationForm
                education={education}
                index={index}
                setEducations={setEducations}
              />
            </li>
          ) : (
            <li key={index}>
              <EducationView education={education} />
            </li>
          ),
        )}
      </ul>
      <AddFormButton educations={educations} setEducations={setEducations} />
      <button onClick={toggleEditable}>{editable ? "Save" : "Edit"}</button>
    </div>
  );
}

function EducationForm({ education, index, setEducations }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducations((prevEducations) => {
      return prevEducations.map((edu, i) =>
        i === index ? { ...edu, [name]: value } : edu,
      );
    });
  };

  return (
    <form>
      <label htmlFor={`school-${index}`}>School:</label>
      <input
        type="text"
        id={`school-${index}`}
        name="school"
        value={education.school || ""}
        onChange={handleChange}
      />
      <label htmlFor={`degree-${index}`}>Degree:</label>
      <input
        type="text"
        id={`degree-${index}`}
        name="degree"
        value={education.degree || ""}
        onChange={handleChange}
      />
      <label htmlFor={`startDate-${index}`}>Start Date:</label>
      <input
        type="text"
        id={`startDate-${index}`}
        name="startDate"
        value={education.startDate || ""}
        onChange={handleChange}
      />
      <label htmlFor={`endDate-${index}`}>End Date:</label>
      <input
        type="text"
        id={`endDate-${index}`}
        name="endDate"
        value={education.endDate || ""}
        onChange={handleChange}
      />
    </form>
  );
}

function AddFormButton({ educations, setEducations }) {
  const addForm = () => {
    const newEducation = new Education("", "", "", "");
    setEducations([...educations, newEducation]);
  };

  return <button onClick={addForm}>Add +</button>;
}

function EducationView({ education }) {
  return (
    <>
      <h2>{education.school}</h2>
      <div>{education.degree}</div>
      <div>{education.startDate}</div>
      <div>{education.endDate}</div>
    </>
  );
}
