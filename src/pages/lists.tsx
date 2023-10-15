import { ListsLayout } from '../components/Lists';
import PrivateRoute from '../components/PrivateRoute';

export default function Lists() {
  return (
    <PrivateRoute>
      <ListsLayout />;
    </PrivateRoute>
  );
}
