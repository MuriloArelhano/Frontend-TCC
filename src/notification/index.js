// toast
import { toast } from 'react-toastify';

class Notification {
    static show(type, message) {
        const availableTypes = ['success', 'error', 'warning', 'warn', 'info'];
        
        if (availableTypes.includes(type)) toast[type](message);
    }
}

export default Notification;