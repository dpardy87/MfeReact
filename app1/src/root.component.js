import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from '../../util/src';

const App1 = () => {
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    const subscription = getMessages().subscribe((message) => {
      if (message.from === 'app2') {
        setReceivedMessages((prevMessages) => [...prevMessages, message.message]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSendMessage = () => {
    const message = `Hello from app 1 ${new Date().toString()}`;
    sendMessage({ from: 'app1', message });
  };

  return (
    <div>
      <h1>App 1</h1>
      <button onClick={handleSendMessage}>Send to App 2</button>
      <div>
        <h2>Messages from App 2:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App1;
