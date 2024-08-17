import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../scss/Header.scss"
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

function Header() {
    const handleSWeet = () => {
        Swal.fire({
            icon: "success",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
            timer: 1500
        });
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>Quizz</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                        <NavLink to="/user" className='nav-link'>User</NavLink>
                    </Nav>
                    <Nav>
                        <button className='login' onClick={() => handleSWeet()}>Đăng Nhập</button>
                        <button className='signUp'>Đăng Ký</button>

                        {/* <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Log out
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;