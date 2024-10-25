// to be used for communicating bt app1 and app2
const { Subject } = require('rxjs');

// Define the event bus
const eventBus = new Subject();

// Function to send a message
const sendMessage = (message) => {
  eventBus.next(message);
};

// Function to get messages as an observable
const getMessages = () => eventBus.asObservable();

module.exports = { sendMessage, getMessages };
