import './csses/main.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


export default function Mainn(){
    // const print = () => window.print();
    return   <Container>
    <Row id='row'>
    <Col sm={4}>
        <h1>About Me </h1>
    </Col>
      <Col sm={8}><p>
      This page shares my best articles to read on topics like health, happiness, creativity, 
      productivity and more. The central question that drives my work is, “How can we live better?”
       To answer that question, I like to write about science-based ways to solve practical problems.</p>
      <a href={'./Parent.js'}  download 
        target="_blank"
        rel="noreferrer"><Button variant="primary" value="download">Print Containt</Button> </a>
       </Col>
       
      
    </Row>
    </Container>
}