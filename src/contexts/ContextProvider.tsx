import React, { createContext, useContext, useState } from "react";

interface StateContextProps {
  user: any | null;
  token: string | null;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

const StateContext = createContext<StateContextProps>({
  user: {},
  token: null,
  setToken: () => {},
  setUser: () => {},
  logout: () => {},
});

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const setToken = (token: string) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("access_token", token);
    } else {
      localStorage.removeItem("access_token");
    }
  };

  const logout = () => {
    _setToken(null);
    setUser({});
    localStorage.removeItem("access_token");
  };

  return (
    <StateContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
