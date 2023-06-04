import './csses/section2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Section1(){

    return <div className="sec2">
        <div className='port'>
            <h1>Portfolio </h1> 
            <Container>
      <Row className="row">
      <Col className='span2'>
      <span id='s2'>
        <h3> Hello World</h3>
      </span>
      </Col>
        <Col className='span'><span id='s1'><h3> Hello World</h3></span></Col>
        <Col className='span2' ><span id='s2'><h3> Hello World</h3></span></Col>
      </Row>
      <Row className="row">
        <Col className='span'><span id='s1'><h3> Hello World</h3></span></Col>
        <Col className='span2'><span id='s2'><h3> Hello World</h3></span></Col>
        <Col className='span'><span id='s1'><h3> Hello World</h3></span></Col>
      </Row>
    </Container>
  
        </div>
    </div>
}