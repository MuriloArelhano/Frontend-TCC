// Auth
import Auth from './Auth';
// axios config
import axios from './axios';

class Form {
  static async sendAnswers(stageId, focusArea, answers) {
    try {
      const [user, , token] = Auth.userIsLogged();

      const body = {
        userId: user.id,
        stageId,
        focusArea,
        answers
      }

      if (token) {
        const { data, status } = await axios.post(`/forms`, body, {
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

  static async getAnswers() {
    try {
      const [, , token] = Auth.userIsLogged();

      if (token) {
        const { data, status } = await axios.get(`/forms`, {
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

  static async getAnswersAmount(stageId, focusArea) {
    try {
      const [user, , token] = Auth.userIsLogged();

      if (token && user.id && stageId && focusArea) {
        const { data, status } = await axios.get(
          `/forms/answers?userId=${user.id}&stageId=${stageId}&focusArea=${focusArea}`,
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          }
        );
  
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

export default Form;