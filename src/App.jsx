import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import PersonalDetails from './pages/PersonalDetails';
import FinancialDetails from './pages/FinancialDetails';
import FinancialDetailsPart2 from './pages/FinancialDetailsPart2';
import Goals from './pages/Goals';
import GoalsPart2 from './pages/GoalsPart2';
import TaxDetails from './pages/TaxDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/financial-details" element={<FinancialDetails />} />
        <Route path="/financial-details-2" element={<FinancialDetailsPart2 />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals-2" element={<GoalsPart2 />} />
        <Route path="/tax-details" element={<TaxDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
