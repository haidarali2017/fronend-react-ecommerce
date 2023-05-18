import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Register() {
 
    return (
       
      <Container> 
    

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
         
         </Col>
      

      
      
        <Col xs={6}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ducimus, quis harum sed recusandae itaque et perferendis est. Veritatis cum est amet nesciunt voluptas repellendus rem voluptatibus et consequatur voluptates!</Col>
      </Row>
    </Container>
    
    )
  }
  
  export default Register
  