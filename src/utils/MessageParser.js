// import React from 'react';

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.alternative_responses_array = [""];
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    } else if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet()
    } else if (lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet()
    } else {
      this.actionProvider.randomResponse()
    }
  }
}

export default MessageParser


