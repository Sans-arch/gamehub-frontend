import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
  const router = useRouter();

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  return children;
}
