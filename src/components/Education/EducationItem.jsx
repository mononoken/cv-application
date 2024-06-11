import { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("Educations:", educations); // Log educations array when it changes
  }, [educations]);

  return (
    <div>
      <ul id="education-forms">
        {educations.map((education) =>
          editable ? (
            <li key={education.id}>
              <EducationForm
                education={education}
                setEducations={setEducations}
              />
            </li>
          ) : (
            <li key={education.id}>
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

function EducationForm({ education, setEducations }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducations((prevEducations) => {
      return prevEducations.map((edu) =>
        edu.id === education.id ? { ...edu, [name]: value } : edu,
      );
    });
  };

  return (
    <form>
      <label htmlFor={`school-${education.id}`}>School:</label>
      <input
        type="text"
        id={`school-${education.id}`}
        name="school"
        value={education.school || ""}
        onChange={handleChange}
      />
      <label htmlFor={`degree-${education.id}`}>Degree:</label>
      <input
        type="text"
        id={`degree-${education.id}`}
        name="degree"
        value={education.degree || ""}
        onChange={handleChange}
      />
      <label htmlFor={`startDate-${education.id}`}>Start Date:</label>
      <input
        type="text"
        id={`startDate-${education.id}`}
        name="startDate"
        value={education.startDate || ""}
        onChange={handleChange}
      />
      <label htmlFor={`endDate-${education.id}`}>End Date:</label>
      <input
        type="text"
        id={`endDate-${education.id}`}
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
