import { toast } from "react-toastify";

export const snackbarError = (error, options) => {
  error.response.data.error.errors.forEach((e) => {
    toast.error(e.messages.en, options);
  });
};

export const snackbarInfo = (message, options) => toast.error(message, options);
