import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  function login(email, password) {}
  function logout() {}

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
}
export { AuthContext, AuthProvider };
