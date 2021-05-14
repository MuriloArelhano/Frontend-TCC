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
        return new Date(birthDate).toLocaleDateString();
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
}

export default User;