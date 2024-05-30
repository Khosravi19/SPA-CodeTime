import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import navlogo from '../../assets/Images/logo.png'
import './Navbar.css'

const expand = 'md'
function MyNavbar(){
    return(

        <Navbar data-bs-theme="light" key={expand} expand={expand}  className="bg-dark-subtle mb-2">
          <Container>
            <Navbar.Brand> <img width="190" height="65" src={navlogo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start">

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img width="190" height="65" src={navlogo}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <NavLink className='nav-link' to={'/'}>صفحه اصلی</NavLink>
                  <NavLink className='nav-link' to={'/Article'}>مقالات</NavLink>
                  <NavLink className='nav-link' to={'/About'}>درباره ما</NavLink>
                  <NavLink className='nav-link ms-md-5' to={'/Login'}>پنل</NavLink>
                  <NavLink className='nav-link' to={'/Login/'}>ورود</NavLink>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}

export default MyNavbar;