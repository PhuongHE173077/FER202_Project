import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import './App.scss';
import Header from './compone/Header/Header';
import { Outlet } from 'react-router-dom';
import { decreaseCounter, increaseCounter } from './redux/action/counterAction';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    // <Container fluid>
    //   <div className='header-container'>
    //     <Header />
    //   </div>
    //   <div className='main-container'>
    //     <div className='app-container'>
    //       <Outlet />
    //     </div>

    //   </div>


    // </Container >
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Count = {count}</div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
