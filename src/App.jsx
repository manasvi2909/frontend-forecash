import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import TaxDetails from './pages/TaxDetails';
import TaxDetails2 from './pages/TaxDetails2';
import Preferences from './pages/Preferences';
import PersonalDetails from './pages/PersonalDetails';
import FinancialDetails from './pages/FinancialDetails';
import FinancialDetailsPart2 from './pages/FinancialDetailsPart2';
import Goals from './pages/Goals';
import GoalsPart2 from './pages/GoalsPart2';
import Dashboard from './pages/Dashboard';
import ExpenseLogs from './pages/ExpenseLogs';
import FinPilot from './pages/FinPilot';
import Forecaster from './pages/Forecaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/tax-details" element={<TaxDetails />} />
        <Route path="/tax-details-2" element={<TaxDetails2 />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/financial-details" element={<FinancialDetails />} />
        <Route path="/financial-details-2" element={<FinancialDetailsPart2 />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals-2" element={<GoalsPart2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense-logs" element={<ExpenseLogs />} />
        <Route path="/fin-pilot" element={<FinPilot />} />
        <Route path="/forecaster" element={<Forecaster />} />
      </Routes>
    </Router>
  );
}

export default App;
