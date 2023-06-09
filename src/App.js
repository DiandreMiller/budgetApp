import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './commons/NavBar';
import BudgetForm from './pages/BudgetForm';
import EditForm from './pages/EditForm';
import FourOFourErrorPage from './pages/FourOFourError';
import Logo from './commons/Logo';
import ViewAllFinances from './pages/ViewAllFinances';
import FinanceDetail from './pages/FinanceDetail';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo/>
        <NavBar/>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<BudgetForm />} path='/budget/new' />
          <Route element={<EditForm />} path='/budget/:index/edit' />
          <Route element={<ViewAllFinances />} path='/budget/viewAllFinances' />
          <Route element={<FinanceDetail />} path='/budget/finance/:index' />
          <Route element={<FourOFourErrorPage />} path='/*' />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
