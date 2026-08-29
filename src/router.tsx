import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import UsersPage from './routes/users';
import Navbar from '@/components/custom/navbar';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index={true}
          path="/"
          element={<Navigate to="/users" replace />}
        />
        <Route
          path="/users"
          element={
            <>
              <Navbar />
              <UsersPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
