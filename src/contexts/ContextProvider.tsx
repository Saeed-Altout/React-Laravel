import { createContext, useState, ReactNode } from "react";

interface User {
  id: number | string;
  user_name: string;
  email: string;
  token: string;
  refresh_token: string;
}

export interface StateContextProps {
  user: User | null;
  token: string | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const StateContext = createContext<StateContextProps>({
  user: null,
  token: null,
  setToken: () => {},
  setUser: () => {},
  logout: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [user, setUserState] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  const [token, setTokenState] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const setToken: StateContextProps["setToken"] = (token) => {
    setTokenState(token);
    if (token) {
      localStorage.setItem("access_token", token);
    } else {
      localStorage.removeItem("access_token");
    }
  };
  const setUser: StateContextProps["setUser"] = (user) => {
    setUserState(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  const logout: StateContextProps["logout"] = () => {
    setTokenState(null);
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  };

  return (
    <StateContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </StateContext.Provider>
  );
}
