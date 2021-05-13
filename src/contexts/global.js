import React, {useEffect, useState, createContext} from 'react';
// api
import AuthAPI from '../api/Auth';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userIsLogged, setUserIsLogged] = useState(false);

  useEffect(() => {
    const userData = AuthAPI.userIsLogged();
    if (userData) {
      setUserIsLogged(true);
      setUser(userData);
    }
  }, [userIsLogged]);

  return (
    <Context.Provider value={{user, setUser, userIsLogged, setUserIsLogged}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
