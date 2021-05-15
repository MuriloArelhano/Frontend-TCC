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

  const removeUser = () => {
    setUserIsLogged(false);
    setUser(null);
    setUserIsAdmin(false);
  }

  return (
    <Context.Provider
      value={{
        user,
        userIsLogged,
        setUserIsLogged,
        userIsAdmin,
        setUser,
        removeUser
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
