import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavigationBar from './components/navbar';
import Search from './components/search';

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
        <Route path='/findnearbyplaces' element={<Search selectedFlower={handleFlowerQuiz} />} />
        <Route path='/index' element={<Search selectedFlower={handleFlowerQuiz} />} />
        <Route path='/login' element={<Login userLoggedIn={handleLoggedIn} />} />
        <Route path='/logout' element={<Search userloggedIn={handleLoggedIn} />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/quiz' element={
          <ProtectedRoute user={user}>
            <Quiz flowerName={flowerName} user={user} key="quiz_key" />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
