import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// component from react-bootrap 
function GridExample(props) {
    return (
      <Row xs={1} md={3} className="g-4">
        {props.data.map((value, index) => (
          <Col key={index}>
            <Card >
              <Card.Img variant="top" src={value.url} />
              <Card.Body>
            <Card.Title>{value.name}</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  
  export default GridExample;