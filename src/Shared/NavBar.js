import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CodeImage from './Media/code.png';
import './NavBar.css';

function NavBar() 
{
  return (
    <>
      <Navbar className='NavBar' >
        <Container>
          <Navbar.Brand className='nav-link' href="#home">
            <img src={CodeImage} style={{ width: '70px', height: '65px' }} />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className='nav-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' href="#about">About</Nav.Link>
            <Nav.Link className='nav-link' href="#about">About</Nav.Link>
            <Nav.Link className='nav-link' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='nav-link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

