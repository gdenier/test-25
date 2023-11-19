import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/User";
import { SignInFormValues } from "..";

export type AuthContextValues = {
  user: User | undefined | null;
  login: (
    values: SignInFormValues
  ) => Promise<void | { errors: { root: string } }>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextValues | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  const [user, setUser] = useState<User | undefined | null>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);

  const login = async (values: SignInFormValues) => {
    setLoading(true);
    try {
      const users = (await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${values.email}`
      ).then(async (res) => await res.json())) as User[];
      if (users.length) {
        if (window?.localStorage)
          localStorage.setItem("user", JSON.stringify(users[0]));
        return setUser(users[0]);
      }
      return {
        errors: {
          root: "Can't finds user with the given email, go to https://jsonplaceholder.typicode.com/users to find one.",
        },
      };
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  // persist user in web with localstorage, must be replace with real auth system based on cookies with JWT in real worl app
  useEffect(() => {
    if (window?.localStorage)
      setUser((oldUser) => {
        if (oldUser) return oldUser;

        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          return JSON.parse(savedUser);
        }

        return null;
      });
  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auhtContext = useContext(AuthContext);

  if (!auhtContext) throw new Error("Can't use Auth outside of AuthProvider");

  return auhtContext as AuthContextValues;
};
