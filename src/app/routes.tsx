import { Routes, Route } from 'react-router-dom';
import CompoundInterestPage from '../features/compound-interest/pages/CompoundInterestPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CompoundInterestPage />} />
    </Routes>
  );
}

export default AppRoutes;