import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './compone/Header/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Container fluid>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='app-container'>
          <Outlet />
        </div>

      </div>


    </Container >
  );
}

export default App;
