import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Budget from './pages/Budget';
import NavBar from './commons/NavBar';
import BudgetForm from './pages/BudgetForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Budget />} path='/budget' />
          <Route element={<BudgetForm/>} path='/budget/new'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
