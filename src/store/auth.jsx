import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState('')
  const [services, setServices] = useState('')

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedin = !!token;
  console.log(`isloggedin ${isLoggedin}`)

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


  // JWT Authentication - to get currently logged in user

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user" , {
        method : 'GET',
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        // console.log(`user Data` , data.userData)
        setUser(data)
      }
    } catch (error) {
      console.log("error in fetching user data")
    }
  }

  // to fetch services section from database

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      
      if(response.ok){
        const data = await response.json()
        setServices(data.response)
        console.log(services)
      }
      } catch (error) {
      console.log(`services front end error ${error.message}`)
    }

      
  }

  useEffect(() => {
    getServices()
    userAuthentication()
  }, [])


  return (
    <AuthContext.Provider value={{ isLoggedin, storeTokenInLS, LogoutUser, user, services }}>
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
