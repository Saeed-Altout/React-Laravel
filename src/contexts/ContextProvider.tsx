import { createContext, useState, ReactNode } from "react";

interface User {}

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
  const [user, setUser] = useState<User | null>(null);
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

  const logout: StateContextProps["logout"] = () => {
    setTokenState(null);
    setUser(null);
    localStorage.removeItem("access_token");
  };

  return (
    <StateContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </StateContext.Provider>
  );
}
