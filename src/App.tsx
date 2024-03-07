import React, { useState } from "react";
import InputTab from "./components/InputTab";
import ResumeTab from "./components/ResumeTab";
//@ts-ignore
import html2pdf from "html2pdf.js";

function App() {
  const [personalDetails, setPersonalDetails] = useState<
    Record<string, string>
  >({
    firstLastName: "",
    cityCountry: "",
    phone: "",
    email: "",
    website: "",
    linkedin: "",
    github: "",
  });

  const [technicalSkills, setTechnicalSkills] = useState<
    Record<string, string>
  >({
    languages: "",
    technologies: "",
    tools: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setPersonalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTechnicalSkills((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveAsPdf = () => {
    const resumeTabContent = document.getElementById("resumeTab");
    html2pdf()
      .from(resumeTabContent)
      .set({
        margin: 5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 5, dpi: 600 },
      })
      .save("resume.pdf");
  };
  return (
    <div className="App flex flex-row w-[80%] mx-auto">
      <button
        onClick={saveAsPdf}
        className="absolute bg-cyan-800 p-2 rounded-lg m-5 ml-[8%]"
      >
        Save as PDF
      </button>
      <InputTab
        onInputChange={handleInputChange}
        personalDetails={personalDetails}
        technicalSkills={technicalSkills}
      />

      <ResumeTab
        personalDetails={personalDetails}
        technicalSkills={technicalSkills}
      />
    </div>
  );
}

export default App;
