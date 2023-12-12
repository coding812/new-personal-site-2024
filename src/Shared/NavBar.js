import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CodeImage from './Media/code.png';
import './NavBar.css';

function NavBar() 
{
  return (
    <>
      <Navbar className='NavBar' >
          <Nav className='container'>
            <NavLink to="/Home" exact className='nav-link'  >Home</NavLink>
            <NavLink to="/About" exact className='nav-link' >About</NavLink>
            <Navbar.Brand to="/Home" exact className='nav-link' >
              <img src={CodeImage} style={{ width: '60px', height: '60px' }} alt='HTML open and closing tag' />
            </Navbar.Brand>
            <NavLink to="/Portfolio" exact className='nav-link' >Portfolio</NavLink>
            <NavLink to="/Contact" exact className='nav-link' >Contact</NavLink>
          </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;

