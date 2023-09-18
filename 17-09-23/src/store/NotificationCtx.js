import { createContext, useEffect, useState } from "react";

const NotificationCtx = createContext({
  message: null,
  showNotification: (notificationMessage) => {},
  hideNotification: () => {},
});

export const NotificationProvider = (props) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        // hide notification after 3 seconds
        setMessage(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [message]);

  const showNotification = (message) => {
    setMessage(message);
  };
  const hideNotification = () => {
    setMessage(null);
  };

  const context = { message, showNotification, hideNotification };

  return (
    <NotificationCtx.Provider value={context}>
      {props.children}
    </NotificationCtx.Provider>
  );
};

export default NotificationCtx;
