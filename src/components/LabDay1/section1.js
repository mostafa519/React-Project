import "./csses/section1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
// import Button from "react-bootstrap/Button";

export default function Section1() { 
  return (
    <div className="sec1">
      <Container>
        <Row>
          <h1>Skills</h1>
          <p>
            You’ll find interesting articles to read on topics like how to stop
            procrastinating as well as personal recommendations like my list of
            the best books to read and my minimalist travel guide. Ready to dive
            in? You can use the categories below to browse my best articles.
          </p>
        </Row>
        <Row>
          <Col sm={6}>
            <h5>My HTML </h5>
            <h5>My Sass </h5>
            <h5>My Angular </h5>
            <h5>My JS </h5>
            <h5>My CSS </h5>
            <h5>My bootstrap </h5>
          </Col>
          <Col sm={6}>
            <ProgressBar now={100}style={{margin:'10px',height:'15px'}} label={`${'HTML'}`} />
            <ProgressBar now={70} style={{margin:'10px',height:'15px'}}label={`${'Sass'}`} />
            <ProgressBar now={60}style={{margin:'10px',height:'15px'}} label={`${'Angular'}`} />
            <ProgressBar now={90} style={{margin:'10px',height:'15px'}}label={`${'JS'}`} />
            <ProgressBar now={20} style={{margin:'10px',height:'15px'}}label={`${'CSS'}`} />
            <ProgressBar now={40} style={{margin:'10px',height:'15px'}} label={`${'Bootstrap'}`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
