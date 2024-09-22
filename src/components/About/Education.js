import { Container } from "react-bootstrap";
import UST_logo from "../../Assets/UST_logo.png";
import Chalmers_logo from "../../Assets/Chalmers_logo.png";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <Container>
      <EducationCard
        logoSrc={UST_logo}
        logoPaddingTop="80px"
        logoPaddingBottom="30px"
        width={{ width: "100%" }}
        universityName="The Hong Kong University of Science and Technology"
        degree="BEng in Computer Engineering, Minor in Big Data Technology"
        location="Hong Kong"
        period="2021/9 - 2025/6 (expected)"
        courses={[
          "Machine Learning",
          "Natural Language Processing",
          "Cloud Computing",
          "Computer Vision",
          "Operating System",
          "Embedded System",
          "Software Engineering",
          "OOP & Data Structure",
        ]}
      />
      <EducationCard
        logoSrc={Chalmers_logo}
        logoPaddingTop="40px"
        logoPaddingBottom="50px"
        width={{ width: "85%" }}
        universityName="Chalmers University of Technology"
        degree="Exchange study in Master Level Courses"
        period="2023/8 - 2024/1"
        location="Gothenburg, Sweden"
        courses={[
          "Image Processing",
          "Signal Processing",
          "Algorithm",
          "Computer Graphics",
        ]}
      />
      <br />
    </Container>
  );
}

export default Education;
