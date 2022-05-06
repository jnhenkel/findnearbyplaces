import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavigationBar from './components/navbar';
import Search from './components/search';
import Login from './components/login';
import Registration from './components/register';
import Feedback from './components/feedback';
import { NULL } from 'mysql/lib/protocol/constants/types';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  let handleLoggedIn = (email) => {
    localStorage.setItem('user', email);
    setUser(email);
  }

  return (
    <Router>
      <NavigationBar user={user} userLoggedIn={handleLoggedIn} />
      <Routes>
        <Route path='/findnearbyplaces' element={<Search  />} />
        <Route path='/search' element={<Search  />} />
        <Route path='/login' element={<Login userLoggedIn={handleLoggedIn} />} />
        <Route path='/logout' element={<Search userloggedIn={handleLoggedIn} />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/feedback' element={
          <ProtectedRoute user={user}>
            <Feedback  user={user} key="quiz_key" />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

const ProtectedRoute = ({ user, children }) => {
  if (user && user != NULL) {
      return children;
  } else {
      return <Navigate to='/login' />;
  }
}

export default App;
