import React from "react";

interface InputTabProps {
  onInputChange: (name: string, value: string) => void;
  personalDetails: Record<string, string>;
  technicalSkills: Record<string, string>;
}

const InputTab: React.FC<InputTabProps> = ({
  onInputChange,
  personalDetails,
  technicalSkills,
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    onInputChange(name, event.target.value);
  };

  return (
    <div className="basis-[40%] bg-slate-600 text-center justify-center py-32">
      <form className="flex flex-col">
        <h2>Personal Details</h2>
        <input
          placeholder="First Last Name"
          value={personalDetails.firstLastName}
          onChange={(e) => handleChange(e, "firstLastName")}
        />
        <input
          placeholder="City, Country"
          value={personalDetails.cityCountry}
          onChange={(e) => handleChange(e, "cityCountry")}
        />
        <input
          placeholder="Phone"
          value={personalDetails.phone}
          onChange={(e) => handleChange(e, "phone")}
        />
        <input
          placeholder="Email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <input
          placeholder="Website"
          value={personalDetails.website}
          onChange={(e) => handleChange(e, "website")}
        />
        <input
          placeholder="Linkedin"
          value={personalDetails.linkedin}
          onChange={(e) => handleChange(e, "linkedin")}
        />
        <input
          placeholder="Github"
          value={personalDetails.github}
          onChange={(e) => handleChange(e, "github")}
        />
        <h2 className="pt-6">Technical Skills</h2>

        <input
          placeholder="Programing Languages"
          value={technicalSkills.languages}
          onChange={(e) => handleChange(e, "languages")}
        />
        <input
          placeholder="Techonologies/Frameworks"
          value={technicalSkills.technologies}
          onChange={(e) => handleChange(e, "technologies")}
        />
        <input
          placeholder="Developer Tools"
          value={technicalSkills.tools}
          onChange={(e) => handleChange(e, "tools")}
        />
      </form>
    </div>
  );
};

export default InputTab;
