import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

interface ResumeTabProps {
  personalDetails: Record<string, string>;
  technicalSkills: Record<string, string>;
}

const ResumePDF: React.FC<ResumeTabProps> = ({
  personalDetails,
  technicalSkills,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            {personalDetails.firstLastName
              ? personalDetails.firstLastName
              : "FIRST LAST"}
          </Text>
          <Text>
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
            <br />
            {personalDetails.linkedin
              ? " " + personalDetails.linkedin
              : "yourlinkedin.com"}{" "}
            •
            {personalDetails.github
              ? " " + personalDetails.github
              : "yourgithub.com"}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Technical Skills</Text>
          <Text>Programing Languages:</Text>
          <Text>
            {technicalSkills.languages
              ? " " + technicalSkills.languages
              : "Java, Javascript, C#, HTML, CSS, SQL"}
          </Text>
          <Text>Techonlogies/Frameworks:</Text>
          <Text>
            {technicalSkills.technologies
              ? " " + technicalSkills.technologies
              : "React.js, TailwindCSS, Git, RestAPIs, .NET, Firebase"}
          </Text>
          <Text>Developer Tools:</Text>
          <Text>
            {technicalSkills.tools
              ? " " + technicalSkills.tools
              : "Visual Studio Code, Visual Studio, MySQL, Github, Microsoft SQL Server, Google Cloud"}
          </Text>
        </View>
        {/* Personal Projects */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Personal Projects</Text>
          {/* Add personal project details here */}
        </View>
        {/* Non-Technical Experience */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Non-Technical Experience</Text>
          {/* Add non-technical experience details here */}
        </View>
        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.subheader}>Education</Text>
          {/* Add education details here */}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ResumePDF;
