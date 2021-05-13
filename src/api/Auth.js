import Storage from './Storage';
// axios config
import axios from './axios';

class Auth {
  static async signUp({ name, email, password }) {
    try {
      const response = await axios.post('/users', { name, email, password });
      return response.status;
    } catch (error) {
      console.log(error.message);
    }
  }

  static async signIn({email, password}) {
    try {
      const { data, status } = await axios.post('/users/auth', { email, password });
      Storage.setItem('@devgo-authentication', data);

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
    // TODO
  }

  static userIsLogged() {
    const auth = Storage.getItem('@devgo-authentication');
    let user = null;

    if (auth) {
      user = auth.user;
    }

    return user;
  }
}

export default Auth;
