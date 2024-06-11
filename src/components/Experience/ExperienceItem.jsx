import { useState } from "react";
import { Experience } from "./Experience";

export function ExperienceItems() {
  const [experiences, setExperiences] = useState([
    new Experience(
      "Gardener",
      "Bilbo Baggins",
      "January 1, 2980",
      "September 22, 3001",
    ),
    new Experience(
      "Best Friend",
      "Frodo Baggins",
      "September 22, 3001",
      "May 1, 3004",
    ),
  ]);

  const [editable, setEditable] = useState(true);

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  return (
    <div>
      <ul id="experience-forms">
        {experiences.map((experience) =>
          editable ? (
            <li key={experience.id}>
              <ExperienceForm
                experience={experience}
                setExperiences={setExperiences}
              />
              <RemoveItemButton
                experience={experience}
                experiences={experiences}
                setExperiences={setExperiences}
              />
            </li>
          ) : (
            <li key={experience.id}>
              <ExperienceView experience={experience} />
              <RemoveItemButton
                experience={experience}
                experiences={experiences}
                setExperiences={setExperiences}
              />
            </li>
          ),
        )}
      </ul>
      <AddFormButton
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <button onClick={toggleEditable}>{editable ? "Save" : "Edit"}</button>
    </div>
  );
}

function ExperienceForm({ experience, setExperiences }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => {
      return prevExperiences.map((exp) =>
        exp.id === experience.id ? { ...exp, [name]: value } : exp,
      );
    });
  };

  return (
    <form>
      <label htmlFor={`employer-${experience.id}`}>Employer:</label>
      <input
        type="text"
        id={`employer-${experience.id}`}
        name="employer"
        value={experience.employer || ""}
        onChange={handleChange}
      />
      <label htmlFor={`title-${experience.id}`}>Title:</label>
      <input
        type="text"
        id={`title-${experience.id}`}
        name="title"
        value={experience.title || ""}
        onChange={handleChange}
      />
      <label htmlFor={`startDate-${experience.id}`}>Start Date:</label>
      <input
        type="text"
        id={`startDate-${experience.id}`}
        name="startDate"
        value={experience.startDate || ""}
        onChange={handleChange}
      />
      <label htmlFor={`endDate-${experience.id}`}>End Date:</label>
      <input
        type="text"
        id={`endDate-${experience.id}`}
        name="endDate"
        value={experience.endDate || ""}
        onChange={handleChange}
      />
    </form>
  );
}

function AddFormButton({ experiences, setExperiences }) {
  const addForm = () => {
    const newExperience = new Experience("", "", "", "");
    setExperiences([...experiences, newExperience]);
  };

  return <button onClick={addForm}>Add +</button>;
}

function RemoveItemButton({ experience, experiences, setExperiences }) {
  const removeItem = () => {
    setExperiences([...experiences].filter((exp) => exp !== experience));
  };

  return <button onClick={removeItem}>Remove -</button>;
}

function ExperienceView({ experience }) {
  return (
    <>
      <h2>{experience.employer}</h2>
      <div>{experience.title}</div>
      <div>{experience.startDate}</div>
      <div>{experience.endDate}</div>
    </>
  );
}
