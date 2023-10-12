import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import CRUD from './pages/CRUD';
import Elements from './pages/Elements';
import Pages from './pages/Pages';

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/"element={<Dashboard/>}/>
      <Route path="/dashboard"element={<Dashboard/>}/>
      <Route path="/admin"element={<Admin/>}/>
      <Route path="/crud"element={<CRUD/>}/>
      <Route path="/elements"element={<Elements/>}/>
      <Route path="/pages"element={<Pages/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;

