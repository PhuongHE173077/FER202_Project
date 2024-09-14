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
                <NavLink to="/" className='navbar-brand'><img src='https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg' /></NavLink>
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
                                <NavDropdown title={<div className='account'>
                                    {account.image ? <img className='cicrle' src={`data:image/png;base64,${account?.image}`} alt='account' title='account' /> : <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg' alt='account' title='account' />}


                                </div>} id="basic-nav-dropdown">
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