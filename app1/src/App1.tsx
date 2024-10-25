import React, { useEffect, useState } from 'react';
import { getMessages, sendMessage } from 'dp-utility-module';

const App1 = () => {
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const subscription = getMessages().subscribe((message) => {
      setReceivedMessage(message.message);
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
      <p>Message from App 2: {receivedMessage}</p>
      <button onClick={handleSendMessage}>Send to App 2</button>
    </div>
  );
};

export default App1;
