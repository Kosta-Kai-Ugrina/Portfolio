import { Box } from "./Box/Box";
import React, { type FC } from "react";
import { TitleBox } from "./TitleBox/TitleBox";
import { Grid } from "@mui/material";
import linkedInIcon from "../../assets/linkedin-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import githubIcon from "../../assets/github-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import "./Portfolio.css";
import { ContactLink } from "./ContactLink/ContactLink";
import { EducationSection } from "./EducationSection/EducationSection";
import { LanguageSection } from "./LanguageSection/LanguageSection";
import { WorkExperienceSection } from "./WorkExperienceSection/WorkExperienceSection";

export const Portfolio: FC = () => {
  return (
    <div className="PortfolioContainer">
      <Grid container spacing={2}>
        <Grid size={12}>
          <TitleBox />
        </Grid>

        <Grid size={4}>
          <Box key="Contact">
            <h2>Contact</h2>

            <ContactLink
              text="LinkedIn Profile"
              icon={linkedInIcon}
              href="https://www.linkedin.com/in/kosta-kai-ugrina/"
            />
            <ContactLink
              text="+45 20 90 15 08"
              icon={phoneIcon}
              href="tel:+4520901508"
            />
            <ContactLink
              text="GitHub Profile"
              icon={githubIcon}
              href="https://github.com/Kosta-Kai-Ugrina"
            />
            <ContactLink
              text="kkugrina@gmail.com"
              icon={mailIcon}
              href="mailto:kkugrina@gmail.com"
            />
          </Box>

          <Box key="Skills">
            <h2>Skills</h2>
            <ul>
              <li>.NET/C#</li>
              <li>Azure DevOps</li>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>Typescript</li>
              <li>C/C++</li>
              <li>Git</li>
              <li>SQL</li>
            </ul>
          </Box>

          <Box key="Ëducation">
            <h2>Education</h2>

            <EducationSection
              educationType="Bachelor of Computer Science"
              universityName="Algebra University"
              yearFrom="2018"
              yearTo="2023"
            >
              Topic of bachelor thesis: “Implementation of behavior of a
              turn-based videogame agent with three decision-making models”
            </EducationSection>

            <EducationSection
              educationType="Erasmus+ Mobility Programme"
              universityName="EPITECH - European Institute of Technology"
              yearFrom="2020"
              yearTo="2021"
            ></EducationSection>
          </Box>

          <Box key="Languages">
            <h2>Languages</h2>
            <ul>
              <li>
                <LanguageSection language="Croatian" skillLevel="C2" />
              </li>
              <li>
                <LanguageSection language="English" skillLevel="C2" />
              </li>
              <li>
                <LanguageSection language="Danish" skillLevel="A2" />
              </li>
            </ul>
          </Box>
        </Grid>

        <Grid size={8}>
          <Box key="Profile">
            <h2>Profile</h2>
            <p>
              I'm a senior software developer , specializing in .NET/C#
              development, with strong professional knowledge of ReactJS. I'm
              detail-oriented, hard-working and open to learning new
              technologies. I have a lot of hands-on experience with developing
              and maintaining backend services as well as developing UIs in many
              different web and desktop technologies. I have had the opportunity
              to design my own software architectures (be it for a video game or
              general applications) and I'm very well acquainted with software
              testing (unit tests, regression tests, product tests, you name
              it).
            </p>
          </Box>

          <Box key="WorkExperience">
            <h2>Work Experience</h2>

            <WorkExperienceSection
              role="Senior Full-stack Developer"
              companyName="Mover System ApS"
              from="January 2025"
              to="Present"
              jobType="Full-time"
            >
              <ul>
                <li>
                  Ownership of development + deployment process of new features
                  from concept to release to production
                </li>
                <li>
                  Developing backend ASP.NET services (web apps/Azure functions){" "}
                </li>
                <li>Developing UI with Aurelia + Typescript framework</li>
                <li>
                  Deploying, monitoring and managing Azure web apps and Azure
                  functions
                </li>
                <li>
                  Developing unit/smoke tests for new functionalities, as well
                  as manual testing of new features
                </li>
                <li>Developing automated service monitors and Azure alerts</li>
              </ul>
            </WorkExperienceSection>

            <WorkExperienceSection
              role="Software Engineer"
              companyName="dSPACE"
              from="November 2023"
              to="October 2024"
              jobType="Full-time"
            >
              <ul>
                <li> Developing software in .NET/C#</li>
                <li>
                  Developing and managing execution of unit tests in .NET/C#
                </li>
                <li>
                  Developing and managing execution of regression tests using an
                  in-house Python framework
                </li>
                <li>
                  Extending core architecture in Python testing framework{" "}
                </li>
                <li>
                  Developing and testing automotive engineer user code using the
                  C programming language
                </li>
                <li>Documenting feature/test requirements and use cases</li>
              </ul>
            </WorkExperienceSection>

            <WorkExperienceSection
              role="Software Developer"
              companyName="KONČAR - Electrical Engineering Institute"
              from="December 2021"
              to="October 2023"
              jobType="Full-time"
            >
              <ul>
                <li> Developed Desktop apps - WinForms, WPF</li>
                <li>Developed Web apps - ReactJS + ASP.NET</li>
                <li>
                  Developed software frameworks for general use inside
                  development team
                </li>
                <li>
                  Set up and managed day-to-day operation of databases and
                  authentication/authorization processes in multiple projects
                </li>
                <li>
                  Actively applied advanced functional programming paradigms in
                  projects
                </li>
                <li>
                  Conceptualized and implemented multiple software system
                  architectures
                </li>
                <li>Communicated with and handled client requests</li>
                <li>
                  Mentored junior developers and developed
                  documentation/tutorials for in-house .NET framework/my own
                  ReactJS framework
                </li>
              </ul>
            </WorkExperienceSection>
          </Box>

          <Box key="Copyrights">
            Icons by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
