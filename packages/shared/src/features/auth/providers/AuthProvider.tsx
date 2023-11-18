import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "../types/User";

export type AuthContextValues = {
  user: User | undefined;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValues | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auhtContext = useContext(AuthContext);

  if (!auhtContext) throw new Error("Can't use Auth outside of AuthProvider");

  return auhtContext as AuthContextValues;
};
