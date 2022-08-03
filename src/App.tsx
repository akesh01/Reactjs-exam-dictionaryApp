import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Results from './pages/Results';
import Search from './pages/Search';

function App() {
  return (
    <div className='App'>
        <Routes>
                <Route element={<Search/>} path='/'></Route>
                <Route element={<Results/>} path='/results'></Route>
            </Routes>
    </div>
  );
}

export default App;
