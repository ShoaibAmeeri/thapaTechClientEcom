import { createContext, useContext } from "react";

    
export const AuthContext = createContext();
const storeTokenInLS = (serverToken) => {
  return localStorage.setItem("token", serverToken);
};

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ storeTokenInLS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);

  if (!AuthContextValue) {
    throw new Error("useAuth used outsite of the provider");
  }

  return AuthContextValue;
};
