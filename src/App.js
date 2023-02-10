import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    // .Provider is used as Auth context does not return anything
    // <AuthContextProvider
    //   value={{
    //     // the second isLoggedIn is taken from the state
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
