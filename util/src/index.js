// to be used for communicating bt app1 and app2
const { Subject } = require('rxjs');

// Define the event bus
const eventBus = window.eventBus || new Subject();
window.eventBus = eventBus;

// Function to send a message
const sendMessage = (message) => {
  eventBus.next(message);
};

const getMessages = () => {
  return eventBus.asObservable();
}

module.exports = { sendMessage, getMessages };
