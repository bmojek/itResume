import React from "react";

interface ResumeTabProps {
  personalDetails: Record<string, string>;
  technicalSkills: Record<string, string>;
}

const ResumeTab: React.FC<ResumeTabProps> = ({
  personalDetails,
  technicalSkills,
}) => {
  return (
    <div
      id="resumeTab"
      className="basis-[100%]  text-black bg-white  text-center py-20"
    >
      <div>
        <h1 className="text-3xl font-bold firstLast">
          {personalDetails.firstLastName
            ? personalDetails.firstLastName
            : "FIRST LAST"}
        </h1>
        <p>
          {personalDetails.cityCountry
            ? personalDetails.cityCountry
            : "City, Country"}{" "}
          •
          {personalDetails.phone
            ? " " + personalDetails.phone
            : "+48 121-122-122"}{" "}
          •
          {personalDetails.email
            ? " " + personalDetails.email
            : "email@gmail.com"}{" "}
          •
          {personalDetails.website
            ? " " + personalDetails.website
            : "portfoliowebsite.com"}
          <br></br>
          {personalDetails.linkedin
            ? " " + personalDetails.linkedin
            : "yourlinkedin.com"}{" "}
          •
          {personalDetails.github
            ? " " + personalDetails.github
            : "yourgithub.com"}
        </p>
      </div>
      <div className="text-left px-6 text-base py-2">
        <h3 className="text-xl font-bold">Technical Skills</h3>
        <hr className="h-1 bg-black my-2" />
        <p className="font-medium float-left">Programing Languages: </p>
        <span className="ml-2 font-light">
          {technicalSkills.languages
            ? " " + technicalSkills.languages
            : "Java, Javascript, C#, HTML, CSS, SQL"}
        </span>
        <br />
        <p className="font-medium float-left">Techonlogies/Frameworks: </p>
        <span className="ml-2 ">
          {technicalSkills.technologies
            ? " " + technicalSkills.technologies
            : "React.js, TailwindCSS, Git, RestAPIs, .NET, Firebase"}
        </span>
        <br />
        <p className="font-medium float-left">Developer Tools: </p>
        <span className="ml-2 ">
          {technicalSkills.tools
            ? " " + technicalSkills.tools
            : "Visual Studio Code, Visual Studio, MySQL, Github, Microsoft SQL Server, Google Cloud"}
        </span>
      </div>
      <div className="text-left px-6 text-base py-2">
        <h3 className="text-xl font-bold">Personal Projects</h3>
        <hr className="h-1 bg-black my-2" />
        <div className="pb-4">
          <h4 className="font-bold float-left">Full Stack Expense Tracker</h4>
          <a className="float-left px-3 underline" href="http://website.com">
            (website.com)
          </a>
          <i>ReactJs, Spring, MySQL, AWS, OpenAI API</i>
          <span className="float-right font-bold text-sm">Feb-May 2023</span>
          <p>
            • Developed a full-stack expense tracker with Rank. Spring Boot and
            MySQL as a relational database.
          </p>
          <p>
            • Implemented CRUD operations, a powerful REST API, and Farr user
            authentication using Spring Security, bolstering the security of
            user accounts and login processes by 80%.{" "}
          </p>
          <p>
            • Deployed the project using AWS services such as S3 for frontend,
            EC2 instance for backend, as well as an RDS.{" "}
          </p>
          <p>
            • Utilized Docker to ship and deploy the software on the server,
            ensuring scalability and compatibility.
          </p>

          <p>
            • Incorporated OpenAl's GPT-3.5 API to create an Al financial
            advising system, providing personalized advice.
          </p>
        </div>
        <div className="pb-4">
          <h4 className="font-bold float-left">React Portfolio</h4>
          <a className="float-left px-3" href="http://portfoliowebsite.com">
            (portfoliowebsite.com)
          </a>
          <i>ReactJs, SCSS. Netlify</i>
          <span className="float-right font-bold text-sm">Jan-May 2023</span>
          <p>
            • Developed a responsive portfolio website using React.ja and SCSS,
            utilizing the BEM methodology.
          </p>
          <p>
            • Integrated Sanity CMS. fetching and displaying dynamic content in
            the React app via Javascript's client API.
          </p>
          <p>
            • Utilized the Framer Motion React library to add dynamic
            animations, enhancing the overall user experience.
          </p>
          <p>
            • Deployed the application to a live production environment using
            Netlify. ensuring seamless accessibility.
          </p>
        </div>
        <div className="pb-4">
          <h4 className="font-bold float-left">Sorting Visualizer</h4>
          <a className="float-left px-3" href="http://sortingwehtitc corn.com">
            (sortingwehtitc corn)
          </a>
          <i>ReactJs, SCSS. Netlify</i>
          <span className="float-right font-bold text-sm">
            Sep 2022-Jan 2023
          </span>
          <p>
            • Implemented a sorting visualizer using HTML. CU. and JavaScript,
            featuring6 different sorting algorithms.
          </p>
          <p>
            • Implemented the most efficient version of each algorithm for
            optimized time complexity and performance.
          </p>
          <p>
            • Represented a comparison in Big-0 complexities of the algorithms
            by displaying the number of comparisons.
          </p>
          <p>
            • Advertised the website as an effective learning resource tool and
            received positive feedback from 4 users.
          </p>
        </div>
        <div className="pb-4">
          <h4 className="font-bold float-left">
            Android Cooperative Game Converter
          </h4>
          <i className="ml-4">Java, Android Studio, Gson, JUnit 5, Agile</i>
          <span className="float-right font-bold text-sm">Sept-Dec 2022</span>
          <p>
            • Built a responsive app using Java on Android Studio that allows
            competitive games to be played cooperatively.
          </p>
          <p>
            • Utilized Gixigla Gaon library to use SharedPreferences API to
            impkment data storage and retrieval capabilities.
          </p>
          <p>
            • Implemented Unit Tests for the logic classes using the JUnIt S
            framework, improving code quality by 70%.{" "}
          </p>
          <p>
            • Coordinated effectively in an Agile team of 4 skilled members,
            resulting in a final project grade of 98%.
          </p>
        </div>
      </div>
      <div className="text-left px-6 text-base py-2">
        <h3 className="text-xl font-bold">Non-Technical Experience</h3>
        <hr className="h-1 bg-black my-2" />
        <div className="pb-4">
          <h4 className="font-bold float-left">Part-time Job</h4>
          <i className="ml-2"> | name of company, name of city, country</i>
          <span className="float-right font-bold text-sm">Sept-Dec 2022</span>
          <p>
            • Built a responsive app using Java on Android Studio that allows
            competitive games to be played cooperatively.
          </p>
          <p>
            • Utilized Gixigla Gaon library to use SharedPreferences API to
            impkment data storage and retrieval capabilities.
          </p>
          <p>
            • Implemented Unit Tests for the logic classes using the JUnIt S
            framework, improving code quality by 70%.{" "}
          </p>
          <p>
            • Coordinated effectively in an Agile team of 4 skilled members,
            resulting in a final project grade of 98%.
          </p>
        </div>
      </div>
      <div className="text-left px-6 text-base py-2">
        <h3 className="text-xl font-bold">Education</h3>
        <hr className="h-1 bg-black my-2" />
        <p className="font-bold">Name of University</p>
        <i className="text-sm ">Enginieering in Computer Science</i>
        <br />
        <p className="text-sm ">
          <b>Relevant Coursework:</b> Data Structures, Alghoritms, Software
          Engineering, Database Systems, Computer Systems, User Interface
          Design, Applied Statistics, Linear Algebra, Discrete Mathematics
        </p>
      </div>
    </div>
  );
};
export default ResumeTab;
