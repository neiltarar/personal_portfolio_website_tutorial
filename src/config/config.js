import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to my portfolio!`)],
  botName: 'Neil',
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(25, 118, 210)',
    },
    chatButton: {
      backgroundColor: 'rgb(25, 118, 210)',
    },
  },
};

export default config;