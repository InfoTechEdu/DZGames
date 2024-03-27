// NotificationPopup.js
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import './popup_style.css';

const NotificationPopup = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show]);

  useImperativeHandle(ref, () => ({
    showPopup: (message) => {
      setShow(true);
      setText(message);
    },
  }));

  const closePopup = () => {
    setShow(false);
  };

  return (
    <div className={`popup ${show ? 'show' : 'hide'}`}>
      <span className="close" onClick={closePopup}>&times;</span>
      <p>{text}</p>
    </div>
  );
});

export default NotificationPopup;
