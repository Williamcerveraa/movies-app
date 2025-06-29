import { createContext, useContext, useState } from 'react';
import { loginAndFetchFavorites } from './core/actions/account/movies-favorites.actions';

interface AuthContextProps {
  session_id: string | null;
  account_id: string | null;
  login: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  session_id: null,
  account_id: null,
  login: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session_id, setSessionId] = useState<string | null>(null);
  const [account_id, setAccountId] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const { session_id, account_id } = await loginAndFetchFavorites(username, password);
    setSessionId(session_id);
    setAccountId(account_id.toString());
  };

  return (
    <AuthContext.Provider value={{ session_id, account_id, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
