// axios config
import axios from './axios';

class Stage {
    static async getStages() {
        try {
            const { data, status } = await axios.get('/stages');

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
}

export default Stage;