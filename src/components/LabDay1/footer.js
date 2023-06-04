import "./csses/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
 
export default function Foot() {
        
  return (
    <div className="foot">
      <Container>
        <Row>
          <Col sm={4}>
            <p className={"btnn"}>
              Take the guesswork out of habit-building. 11 email lessons walk
              you through the first 30 days of a habit step-by-step, so you know
              exactly what to do.
            </p>
          </Col>
          <Col sm={4}>
            <Button variant="outline-primary"  className={"btnn"} size="lg">
              Click Here
            </Button>
          </Col>
          <Col sm={4}>
          <p className={"btnn"}>
              Take the guesswork out of habit-building. 11 email lessons walk
              you through the first 30 days of a habit step-by-step, so you know
              exactly what to do.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
