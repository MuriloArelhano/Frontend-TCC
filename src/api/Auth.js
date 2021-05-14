import Storage from './Storage';
// axios config
import axios from './axios';

class Auth {
  static async signUp({ name, email, password }) {
    try {
      const { data, status } = await axios.post('/users', { name, email, password });
      return {
        status,
        data
      }
    } catch (error) {
      return {
        status: error.response.status,
        error: error.response.data.error
      }
    }
  }

  static async signIn({email, password}) {
    try {
      const { data, status } = await axios.post('/users/auth', { email, password });
      Storage.setItem('@devgo-authentication', {
        ...data,
        isAdmin: data.user.role === 'ADMIN'
      });

      return {
        status,
        data
      }
    } catch (error) {
      return {
        status: error.response.status,
        error: error.response.data.error
      }
    }
  }

  static async signOut() {
    Storage.removeItem('@devgo-authentication');
  }

  static userIsLogged() {
    const auth = Storage.getItem('@devgo-authentication');
    let user = null;
    let isAdmin = false;
    let token = null;

    if (auth) {
      user = auth.user;
      isAdmin = auth.isAdmin;
      token = auth.token;
    }

    return [user, isAdmin, token];
  }
}

export default Auth;
