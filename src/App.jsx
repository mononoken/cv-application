import { PersonItem } from "./components/Person/PersonItem";
import { EducationItems } from "./components/Education/EducationItem";
import { ExperienceItems } from "./components/Experience/ExperienceItem";
import "./App.css";

function App() {
  return (
    <>
      <PersonItem />
      <EducationItems />
      <ExperienceItems />
    </>
  );
}

export default App;
