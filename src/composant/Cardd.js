import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import i1 from'../Imagee/1.jpg'
import Form from 'react-bootstrap/Form';

const Cardd = () => {
    return (
      <div>
        {/* Card component with a fixed width of 18rem */}
        <Card style={{ width: '18rem' }}>
        {/* Card image */}
        <Card.Img variant="top" src={i1} />
        <Card.Body>
          {/* Card title */}
          <Card.Title>Cristiano Ronaldo</Card.Title>
          {/* Card text */}
          <Card.Text>
          {/* Description of Cristiano Ronaldo */}
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano Ronaldo ou Ronaldo et surnommé CR7, né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à Al-Nassr FC
          </Card.Text>
          <Form>
            {/* Form component */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              {/* Email input field */}
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              {/* Password input field */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* Checkbox input */}
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            {/* Submit button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    )
}

export default Cardd;
