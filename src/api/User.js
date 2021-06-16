// Auth
import Auth from './Auth';
// axios config
import axios from './axios';

class User {
    static async getUsers(filter = null) {
        const [, , token] = Auth.userIsLogged();
        const queryString = filter ? `?${filter}=true` : '';

        try {
            if (token) {
                const response = await axios.get(`/users${queryString}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                return response.data;
            }
        } catch (error) {
            return error.message;
        }
    }

    static formatBirthDate(birthDate) {
        const day = new Date(birthDate).getUTCDate();
        const month = new Date(birthDate).getUTCMonth() + 1;
        const year = new Date(birthDate).getUTCFullYear();

        return `${Number(day) < 10 ? '0' + day : day}/${Number(month) < 10 ? '0' + month : month}/${year}`;
    }

    static async manageUserAccess(type, userEmail) {
        const [, , token] = Auth.userIsLogged();

        try {
            if (token) {
                const response = await axios.post(`/users/${type}`, { email: userEmail }, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                return {
                    status: response.status,
                    message: response.data.message
                };
            }
        } catch (error) {
            return error.message;
        }
    }

    static async updateUser({ name, email, birthDate }) {
        try {
            const [user, , token] = Auth.userIsLogged();
      
            if (token) {
              const { data, status } = await axios.put(`/users/${user.id}`, {
                name, email, birthDate
              }, {
                headers: {
                  authorization: `Bearer ${token}`
                }
              });
        
              return {
                status,
                data
              }
            }
      
            return {
              status: 401,
              error: 'Usuário não autorizado'
            }
          } catch (error) {
            return {
              status: error.response.status,
              error: error.response.data.error
            }
          }
    }

    static async changePassword({ currentPassword, newPassword, newPasswordConfirmation }) {
        try {
            const [user, , token] = Auth.userIsLogged();
      
            if (token) {
              const { data, status } = await axios.put(`/users/${user.id}/password`, {
                currentPassword, newPassword, newPasswordConfirmation
              }, {
                headers: {
                  authorization: `Bearer ${token}`
                }
              });
        
              return {
                status,
                data
              }
            }
      
            return {
              status: 401,
              error: 'Usuário não autorizado'
            }
          } catch (error) {
            return {
              status: error.response.status,
              error: error.response.data.error
            }
          }
    }
}

export default User;