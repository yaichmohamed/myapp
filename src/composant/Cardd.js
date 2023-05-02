import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import i1 from'../Imagee/1.jpg'
import Form from 'react-bootstrap/Form';

const Cardd = () => {
    return (
      <div >
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={i1} />
        <Card.Body>
          <Card.Title>Cristiano Ronaldo</Card.Title>
          <Card.Text>
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à Al-Nassr FC
          </Card.Text>
          <Form>
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
        </Card.Body>
      </Card>
</div>
    )

    

    }

  export default Cardd  
    



    

