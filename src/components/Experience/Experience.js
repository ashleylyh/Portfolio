import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import VerticalTimeline from "./VerticalTimeline/VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimeline/VerticalTimelineElement";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineLeaderboard, MdOutlineDesignServices, MdWorkOutline, MdOutlinePeopleAlt, MdOutlineBrandingWatermark } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import "./Experience.css";
import pathadvisor from "../../Assets/Experience/pathadvisor.jpeg";
import itri from "../../Assets/Experience/itri.png";
import novbee from "../../Assets/Experience/novbee.jpeg";
import wiadvance from "../../Assets/Experience/wiadvance.png";
import usthing from "../../Assets/Experience/usthing.svg";
import tsa from "../../Assets/Experience/tsa.jpeg";
import bog from "../../Assets/Experience/bog.jpeg";

const data = [
  {
    date: "Aug. 2024 - (present)",
    title: "Lead Project Coordinator",
    company: "HKUST Path Advisor ",
    company_description:
      "Path Advisor is a map application for the HKUST campus, which helps users to find their best way around the campus. ",
    location: "Hong Kong",
    work_description: [
      "Coordinator of path advisor student team, cooperating with professor and ITSC department.",
      "Responsible for teams’ communication, and production/ development of new features.",
      "Issue-shooting to provide a better user experience, and handle user feedback to improve the map application.",
    ],
    keywords: ["JavaScript", "React", "Frontend-Develop"],
    icon: <MdOutlineLeaderboard />,
    logo: pathadvisor,
    website: "https://pathadvisor.ust.hk/",
  },
  {
    date: "Sept. 2022 - Aug. 2024",
    title: "Frontend Developer",
    company: "HKUST Path Advisor ",
    company_description:
      "Path Advisor is a map application for the HKUST campus, which helps users to find their best way around the campus. ",
    location: "Hong Kong",
    work_description: [
      "Maintain and improve frontend code for an intuitive and user-friendly web interface.",
      "Collaborate closely with the ITSC department to ensure seamless integration of features.",
      "Edit and update campus maps using data received from ITSC, ensuring accuracy and relevancy.",
    ],
    keywords: ["JavaScript", "React", "Frontend-Develop"],
    icon: <LuCode2 />,
    position: "left",
    logo: pathadvisor,
    website: "https://pathadvisor.ust.hk/",
  },
  {
    date: "June 2024 - Aug. 2024",
    title: "Autonomous Driving Software Engineer Intern - Simulation team",
    company: "Industrial Technology Research Institute",
    company_description:
      "A leading research institute focused on industrial technology in Taiwan.",
    location: "Hsinchu, Taiwan",
    work_description: [
      "Developed simulation scenario management system's backend data logic and API endpoints for efficient data management",
      "Set up and develop a server for automating visualizing simulation scenarios, including schematic image and video generation",
      "Gained expertise in MongoDB, API development, and multithreading for efficient resource allocation.",
      "Documents writing and Unit testing which achieve 95% coverage for the scenario management system.",
    ],
    keywords: ["Python", "TypeScript", "CI/CD", "Backend-Develop"],
    icon: <IoCarOutline />,
    position: "right",
    logo: itri,
    website: "https://www.itri.org.tw",
  },
  {
    date: "Sep. 2022 - June 2023",
    title: "UIUX Designer",
    company: "USThing",
    company_description:
      "A student-developed all-in-one app for HKUSTer better access to campus services.",
    location: "Hong Kong",
    work_description: [
      "Designing an appealing and user-friendly interface for App and web",
      "Collaborating with developer teams for researching, designing,and implementing new features.",
    ],
    keywords: ["Figma", "UI/UX"],
    icon: <MdOutlineDesignServices />,
    position: "left",
    logo: usthing,
    website: "https://www.wiadvance.com/",
  },
  {
    date: "June 2023 - Aug. 2023",
    title: "Software Engineer Intern - Web Development",
    company: "NovBee Limited",
    company_description:
      "A startup operates as a music collaboration production studio platform.",
    location: "Hong Kong",
    work_description: [
      " Developed new features for web applications",
      "Determined the structure and design of website and built reusable code components for efficiency",
      "Collaborated with the UI/UX team to align designs and functionality",
    ],
    keywords: ["TypeScript", "CSS", "Frontend-Develop"],
    icon: <CgWebsite />,
    position: "right",
    logo: novbee,
    website: "https://www.novbee.co/",
  },
  {
    date: "June 2022 - July 2023",
    title: "Publicity Manager",
    company: "HKUST Taiwanese Students' Association",
    company_description:
      "Society serves Taiwanese students in HKUST, and promotes Taiwanese culture.",
    location: "Hong Kong",
    work_description: [
      "Managing social media accounts, gatekeepers for marketing materials, souvenir design, and external collaborations",
    ],
    keywords: ["TypeScript", "CSS", "Frontend-Develop"],
    icon: <MdOutlinePeopleAlt />,
    position: "left",
    logo: tsa,
    website: "https://www.instagram.com/hkustsu_tsa/",
  },
  {
    date: "July 2022 - Aug. 2022",
    title: "Software Engineer Intern - Web Development",
    company: "Wiadvance (緯謙科技)",
    company_description:
      "A subsidiary of Wistron Corporation, which provides cloud-based services and solutions.",
    location: "Taipei, Taiwan",
    work_description: [
      "Research in customer service system for the new release cloud app market, and upgrade the user experience.",
      "Customer-form website debugging (with website API and MongoDB)",
    ],
    keywords: ["Python", "API", "SQL", "MongoDB"],
    icon: <MdWorkOutline />,
    position: "right",
    logo: wiadvance,
    website: "https://www.wiadvance.com/",
  },
  {
    date: "Sep. 2021 - June 2023",
    title: "Marketing Team Officer",
    company: "Be Our Gest @HKUST",
    company_description:
      "A student-led society connects local and international students, promoting cultural diversity.",
    location: "Hong Kong",
    work_description: [
      "Develop branding, design marketing materials, organize events, and analyze promotion decision-making.",
    ],
    keywords: ["Adobe Illustrator", "Final Cur Pro", "Marketing"],
    icon: <MdOutlineBrandingWatermark />,
    position: "left",
    logo: bog,
    website: "https://www.instagram.com/beourguesthkust/",
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <h1 className="experience-heading">
        My <strong className="purple">Society & Work </strong>Experience
      </h1>
      <VerticalTimeline
        layout="2-columns" // 1-column-left, 1-column-right, 2-columns
      >
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            // date={item.date}
            // dateClassName="date"
            shadowSize="medium"
            contentStyle={{ background: "#e8f1f8", color: "#005A9C " }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
            iconStyle={{ background: "#e6bbad", color: "#fff" }}
            icon={item.icon}
            position={item.position}
          >
            <div className="vertical-timeline-element-company">
              {item.logo && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="company-logo"
                  />
                </a>
              )}
              <h4>{item.company}</h4>
            </div>

            <h3 className="vertical-timeline-element-title">{item.title}</h3>

            <div className="timeline-header">
              <h4 className="vertical-timeline-element-dateee">{item.date}</h4>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
            </div>
            <div className="company-description">
              {item.company_description}
            </div>
            <div className="description">
              {item.work_description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </div>
            <div className="keywords">
              {item.keywords.map((keyword, keywordIndex) => (
                <span key={keywordIndex} className="keyword">
                  {keyword}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
}

export default Experience;
