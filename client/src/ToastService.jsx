
import { toast } from 'react-toastify';

export const showSuccess = (message) => {
  toast.success(message, {
    style: {
      backgroundColor: '#a7f3d0', 
      color: '#000',
    }
  });
};

export const showError = (message) => {
  toast.error(message);
};

export const showInfo = (message) => {
  toast.info(message);
};

export const showWarning = (message) => {
  toast.warning(message);
};
