import React from "react";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";
import { HiMail, HiPhone } from "react-icons/hi";

export const CVPage = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div
          className="col-md-9 mt-2 pt-2 mb-2 pb-2"
          style={{ border: "1px solid black" }}
        >
          <CV />
        </div>
      </div>
    </div>
  );
};

const CV = () => {
  return (
    <div className="container p-0 m-0" id="cv-content">
      <div className="row m-0 p-0" style={{ minHeight: "100vh" }}>
        <div className="col-4 m-0 p-0" style={{ backgroundColor: "#1471bd" }}>
          <h4 className="text-center text-white pt-3 pb-2">
            Mohammad Rafiul Islam
          </h4>
          <Contacts />
          <Skills />
          <Languages />
          <ToolsTechnologies />
        </div>
        <div className="col-8 m-0">
          <RightBlockContainer>
            <AboutMe />
          </RightBlockContainer>

          <RightBlockContainer>
            <WorkExperiences />
          </RightBlockContainer>

          <RightBlockContainer>
            <Educations />
          </RightBlockContainer>

          <ProjectHighLights />
        </div>
      </div>
    </div>
  );
};

const RightBlockContainer = (props: { children?: React.ReactNode }) => (
  <div className="mt-2 mb-4">
    {props.children}
    <hr />
  </div>
);

const AboutMe = () => {
  return (
    <p>
      Interested to working with new ideas to make things better and easy to
      access. Always humble to learn and share experience. Enthusiast to build
      highly scalable and distributed software.
    </p>
  );
};

const WorkExperiences = () => {
  const works = [
    {
      name: "Software Engineer",
      dateRange: "Jun, 2021 - Present",
      locationUrl: "http://mybebsa.io",
      location: "MyBebsha Platform",
      summary: `MyBebsha is an under development startup in Bangladesh. MyBebsha
            platform provide online shop solution and point of sale (POS)
            solution softwares in SaaS model (Software as a Service).
            Contributed to build OTP service and Core API Service with Golang.
            Managed microservice integration and deployment.`,
    },
    {
      name: "Trainee Software Engineer",
      dateRange: "Jan, 2020 - Jul, 2020",
      location: "Cefalo Bangladesh Limited",
      locationUrl: "https://www.cefalo.com/en/",
      summary: `
      Learnt about industrial standards while design and build enterprise
      grade software. Responsible to re-build Cefalo HR Management
      Software with .NET Core and ReactJS.`,
    },
  ];

  return (
    <div>
      <h4>
        <u>Work Experience</u>
      </h4>
      <ul>
        {works.map((item) => (
          <li>
            <Timeline {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Educations = () => {
  return (
    <div>
      <div>
        <h4>
          <u>Educations</u>
        </h4>
        <ul>
          <li>
            <div className="row">
              <div className="col-7">
                <b>BSc in Software Engineering</b>
              </div>
              <div className="col-5">
                <p>Class of 2020</p>
              </div>
            </div>
            <p>Shahjalal University of Science & Technology</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProjectHighLights = () => {
  return (
    <div>
      <h4>
        <u>Project Hightlights</u>
      </h4>
      <ul>
        <li>
          <a href="https://github.com/sensehome">SenseHome</a>
          <p style={{ fontSize: "15px" }}>
            Smart, Intelligent and IoT base Home Automation System
          </p>
        </li>

        <li>
          <a href="https://github.com/rafiulgits/IotHub">IotHub</a>
          <p style={{ fontSize: "15px" }}>
            Cloud based IoT system solution. MQTT Broker, MQTT Agent, SignalR
            Hub, Data Source API
          </p>
        </li>

        <li>
          <a href="https://github.com/sakkhat/alpha">Sakkhat</a>
          <p style={{ fontSize: "15px" }}>Market place of e-commerce shop</p>
        </li>
      </ul>
    </div>
  );
};

const Contacts = () => {
  const mail = "mdrafi900@gmail.com";
  const phone = "+8801775998872";
  const githubId = "rafiulgits";
  const linkedinId = "rafiul15";
  const website = "rafiulgits.github.io";
  return (
    <div>
      <SidebarBlockTitle name="Contacts" />
      <div className="px-3 py-1">
        <p>
          <a className="a-none text-white" href={`mailto:${mail}`}>
            <HiMail /> {mail}
          </a>
        </p>
        <p>
          <a className="a-none text-white" href={`tel:${phone}`}>
            <HiPhone />
            {phone}
          </a>
        </p>
        <p>
          <a
            className="a-none text-white"
            href={`https://linkedin.com/in/${linkedinId}`}
          >
            <BsLinkedin /> {linkedinId}
          </a>
        </p>
        <p>
          <a
            className="a-none text-white"
            href={`https://github.com/${githubId}`}
          >
            <BsGithub /> {githubId}
          </a>
        </p>
        <p>
          <a className="a-none text-white" href={`https://${website}`}>
            <BsGlobe /> {website}
          </a>
        </p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skils = [
    { name: "Developing", value: 85 },
    { name: "Solution Design", value: 75 },
    { name: "Team Working", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Database", value: 80 },
  ];

  return (
    <div>
      <SidebarBlockTitle name="Skills" />
      <div className="px-3 py-1">
        {skils.map((item) => (
          <div>
            <div className="row">
              <div className="col-8">
                <h6 className="text-white">{item.name}</h6>
              </div>
              <div className="col-4">
                <ProgressBar value={item.value} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Languages = () => {
  const langs = [
    { name: "Golang", value: 75 },
    { name: "C#", value: 70 },
    { name: ".NET", value: 65 },
    { name: "Typescript", value: 70 },
    { name: "Javascript", value: 80 },
    { name: "ReactJS", value: 70 },
    { name: "SQL", value: 70 },
  ];
  return (
    <div>
      <SidebarBlockTitle name="Preferable Languages & Frameworks" />
      <div className="px-3 py-1">
        {langs.map((item) => (
          <div>
            <div className="row">
              <div className="col-8">
                <h6 className="text-white">{item.name}</h6>
              </div>
              <div className="col-4">
                <ProgressBar value={item.value} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ToolsTechnologies = () => {
  const techs = [
    "Git",
    "Microservice",
    "Redis",
    "Message Broker",
    "Gateway",
    "SQL Server",
  ];
  return (
    <div>
      <SidebarBlockTitle name="Tools & Technologies" />
      <div className="p-2">
        {techs.map((item) => (
          <Tag name={item} />
        ))}
      </div>
    </div>
  );
};

interface TimelineProps {
  name: string;
  dateRange: string;
  location: string;
  locationUrl?: string;
  summary: string;
}

const Timeline = (props: TimelineProps) => {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <b>{props.name}</b>
        </div>
        <div className="col-5">
          <span style={{ fontSize: "14px" }}>{props.dateRange}</span>
        </div>
      </div>
      <p>
        <a className="a-none" href={props.locationUrl}>
          {props.location}
        </a>
      </p>
      <p style={{ fontSize: "14px" }}>{props.summary}</p>
    </div>
  );
};

const Tag = (props: { name: string }) => (
  <span className="badge bg-dark m-1">{props.name}</span>
);

const ProgressBar = (props: { value: number }) => (
  <div className="progress">
    <div
      className="progress-bar bg-info"
      role="progressbar"
      style={{ width: `${props.value}%` }}
      aria-valuenow={props.value}
      aria-valuemin={0}
      aria-valuemax={100}
    ></div>
  </div>
);

const SidebarBlockTitle = (props: { name: string }) => (
  <div className="p-2" style={{ backgroundColor: "#212a45" }}>
    <h6 className="text-white p-0">{props.name}</h6>
  </div>
);
