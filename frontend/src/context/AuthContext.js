import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  localStorage.getItem("authTokens");
  let [authTokens, setAuthTokens] = useState(null);
  let [user, setUser] = useState(null);

  let history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();

    console.log("dsf");
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.status == 200) {
      let data = await response.json();
      setAuthTokens(data);
      // setUser(jwtDecode(data.access));
      const decoded = jwtDecode(data.access);

      console.log(decoded);
      setUser(decoded);
      localStorage.setItem("authTokens", JSON.stringify(decoded));
      history.push("/");
    } else {
      alert("sth went wrong");
    }
  };

  let contextData = {
    user: user,
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
