import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ParticipantForm from './components/ParticipantForm';
import ParticipantsList from './components/ParticipantsList';
import AdminLogin from './components/AdminLogin';
import Welcome from './components/welcome';

const App = () => {
  return (
    <Router> {/* Wrap everything with Router */}
      
      <div className="flex">
        <Sidebar />
        <div className="w-full p-6">
          <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<ParticipantForm />} />
            <Route path="/participants" element={<ParticipantsList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
