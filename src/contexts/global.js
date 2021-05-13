import React, {useEffect, useState, createContext} from 'react';
// api
import AuthAPI from '../api/Auth';

export const Context = createContext();

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    const [userData, isAdmin] = AuthAPI.userIsLogged();
    if (userData) {
      setUserIsLogged(true);
      setUser(userData);
      setUserIsAdmin(isAdmin);
    }
  }, [userIsLogged]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        userIsLogged,
        setUserIsLogged,
        userIsAdmin,
        setUserIsAdmin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
