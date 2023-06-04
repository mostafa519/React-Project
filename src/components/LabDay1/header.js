import './csses/header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Head(){

    return <div style={{backgroundImage:"URL('./images/background.jpg')"}} className="Boddy">
     <Container>
    <Row >
    <Col id='r' sm={4}>
        <h1>Mustafa Ali </h1>
        <h3>FrontEnd Developer</h3>
        <Button variant="primary">Click Me</Button>
    </Col>
      <Col sm={8}> 
      </Col>
      </Row>
      </Container>
    </div>   
}