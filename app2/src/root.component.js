import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../../util';

const App2 = () => {
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const subscription = getMessages().subscribe((message) => {
      if (message.from === 'app1') {
        setReceivedMessages((prevMessages) => [...prevMessages, message.message]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSendMessage = () => {
    const message = `Hello from app 2 ${new Date().toString()}`;
    sendMessage({ from: 'app2', message });
  };

  return (
    <div>
      <h1>App 2</h1>
      <button onClick={handleSendMessage}>Send to App 1</button>
      <div>
        <h2>Messages from App 1:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App2;
