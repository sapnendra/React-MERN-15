let listeners = [];
let alerts = [];

let alertCounter = 0;

export const addAlert = (type, message, duration = 2000) => {
  const now = Date.now();
  const id = `${now}-${++alertCounter}`;
  const alert = { id, type, message, duration, createdAt: now };
  
  alerts.push(alert);
  listeners.forEach((l) => l([...alerts]));
};

export const removeAlert = (id) => {
  alerts = alerts.filter((a) => a.id !== id);
  listeners.forEach((l) => l([...alerts]));
};

export const onAlertChange = (listener) => {
  listeners.push(listener);
  listener([...alerts]);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
};
