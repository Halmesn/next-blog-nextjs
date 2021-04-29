import ContactForm from 'components/contact/ContactForm';
import Notification from 'components/ui/Notification';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [activeNotification, setActiveNotification] = useState(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotification = (notification) => {
    setActiveNotification(notification);
  };

  const hideNotification = () => {
    setActiveNotification(null);
  };

  return (
    <>
      <ContactForm showNotification={showNotification} />
      {activeNotification && (
        <Notification
          notification={activeNotification}
          hideNotification={hideNotification}
        />
      )}
    </>
  );
}
