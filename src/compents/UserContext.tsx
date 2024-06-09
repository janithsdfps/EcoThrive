// UserContext.ts
import React, { createContext, useState, ReactNode } from 'react';

// Define a type for the user data
type User = {
  email: string;
  // Add other user properties if needed
};

// Define a type for the context value
type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

// Create a default value for the context
const defaultValue: UserContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
