import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Lists from '../pages/Lists';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Game from '../pages/Game';
import { PrivateRoute } from './privateRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game/:slug" element={<Game />} />
        <Route path="/lists" element={<PrivateRoute />}>
          <Route path="/lists" element={<Lists />} />
        </Route>
      </Routes>
    </Router>
  );
};
