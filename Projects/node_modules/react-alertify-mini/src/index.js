import AlertContainer from "./AlertContainer";
import { addAlert } from "./alertStore";

export const alert = {
  success: (msg) => addAlert("success", msg),
  error: (msg) => addAlert("error", msg),
  warning: (msg) => addAlert("warning", msg),
};

export { AlertContainer };
