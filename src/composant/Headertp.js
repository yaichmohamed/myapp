import  React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './header.css'
const Headertp = () => {
  return (
    <div> 
      <div className='btn'>
        <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Home</Button>
      <Button variant="secondary">News</Button>
      <Button variant="secondary">Contact</Button>
      <Button variant="secondary">About</Button>
    </ButtonGroup>
    </div>
    </div>
  )
}

export default Headertp
