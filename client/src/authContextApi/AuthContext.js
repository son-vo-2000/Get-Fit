import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const [currentUser, setCurrentUser] = useState(initialUser);

  const login = async (input) => {
    const response = await fetch(
      `http://localhost:5000/auth/login`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(input),
      }
    );
    if(!response.ok){
        const errorData = await response.json();
      console.error("Login failed:", errorData.message);
      return; 
    }

    const responseData = await response.json();
    setCurrentUser(responseData);
    return responseData
  };

  const logout = async () => {
    await fetch("http://localhost:5000/auth/logout",{
        method: "POST"
    })
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}