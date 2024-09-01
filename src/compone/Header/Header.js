import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../scss/Header.scss"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';

function Header() {
    const account = useSelector(state => state.account.account)
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const nav = useNavigate();
    const handleClickLogin = () => {
        nav('/login')
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
                        {isAuthenticated === false ?
                            <>
                                <button className='login' onClick={() => handleClickLogin()}>Đăng Nhập</button>
                                <button className='signUp'>Đăng Ký</button>
                            </>
                            : <>
                                <NavDropdown title={account?.username} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>}



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;