import React, {useEffect, useState, createContext} from 'react';
// api
import { AuthAPI, StorageAPI } from '../api';

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

  const updateUserData = (newData) => {
    const auth = StorageAPI.getItem('@devgo-authentication');
    if (auth) {
      setUser(newData);
      auth.user = newData;
      StorageAPI.setItem('@devgo-authentication', auth);
    }
  }

  return (
    <Context.Provider
      value={{
        user,
        userIsLogged,
        setUserIsLogged,
        userIsAdmin,
        setUser,
        removeUser,
        updateUserData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
