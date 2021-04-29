import styles from './ContactForm.module.css';

import { useRef } from 'react';

export default function ContactForm({ showNotification }) {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  const sendContactForm = async (formData) => {
    showNotification({
      title: 'Sending your contact form...',
      message: "It'll take a moment...",
      status: 'pending',
    });

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      showNotification({
        title: 'Success',
        message: 'Successfully sent your form!',
        status: 'success',
      });
    } catch (error) {
      console.log(error.message);
      showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    }
  };

  function contactFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    sendContactForm({
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={contactFormHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email </label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            rows="5"
            ref={messageInputRef}
            required
          />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
