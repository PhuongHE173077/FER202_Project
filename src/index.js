import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './compone/Home/HomePage';
import Admin from './compone/Admin/Admin';
import User from './compone/User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import DashBoard from './compone/Admin/Content/DashBoard';
import ManageUser from './compone/Admin/Content/ManageUser';
import Login from './compone/Authentication/Login';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ListQuiz from './compone/User/ListQuiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route index element={<HomePage />} />
            <Route path='/quizz' element={<ListQuiz />} />
            <Route path='user' element={<User />} />
          </Route>
          <Route path='/admin' element={<Admin />} >
            <Route index element={<DashBoard />} />
            <Route path='manage-users' element={<ManageUser />} />
          </Route>
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </PersistGate>

  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
