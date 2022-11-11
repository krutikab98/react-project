import React, {useContext} from "react";

import { AuthenticateContext } from './contextAPI/Authenticate.context.js';
import Login from './Login/index.js';
import Home from './Home/Home.js';

const App = () => {
  const { state } = useContext(AuthenticateContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Home />
}

export default App;