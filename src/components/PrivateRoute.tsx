import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push('/login');
  }

  return children;
}
