import { Row, Col, Card } from "react-bootstrap";

const EducationCard = ({
  logoSrc,
  logoPaddingTop, 
  logoPaddingBottom,
  width,
  universityName,
  degree,
  location,
  period,
  courses,
}) => {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={3}
        style={{ paddingTop: logoPaddingTop, paddingBottom: logoPaddingBottom}}
        className="edu-img"
      >
        <img src={logoSrc} alt={universityName} className="img-fluid" style={width}/>
      </Col>
      <Col
        md={6}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "1.5em", paddingBottom: "20px" }}>
          <strong className="purple">{universityName}</strong>
        </h1>
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>{degree}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{location}</span>
                <span>{period}</span>
              </div>
              <div style={{ marginTop: "20px", textAlign: "start" }}>
                <h5 className="purple">Relevant Courses:</h5>
                <Row>
                  {courses.map((course, index) => (
                    <Col xs={6} key={index}>
                      <li style={{ fontSize: "0.9em" }}>{course}</li>
                    </Col>
                  ))}
                </Row>
              </div>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EducationCard;
