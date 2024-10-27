import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from './src';

const MessageComponent = ({ appName, targetApp }) => {
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const subscription = getMessages().subscribe((message) => {
      if (message.from === targetApp) {
        setReceivedMessages((prevMessages) => [...prevMessages, message.message]);
      }
    });
    return () => subscription.unsubscribe();
  }, [targetApp]);

  const handleSendMessage = () => {
    const message = `Hello from ${appName} ${new Date().toString()}`;
    sendMessage({ from: appName, message });
  };

  return (
    <div>
      <h1>{appName} is mounted!</h1>
      <button onClick={handleSendMessage}>Send to {targetApp}</button>
      <div>
        <h2>Messages from {targetApp}:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageComponent;
