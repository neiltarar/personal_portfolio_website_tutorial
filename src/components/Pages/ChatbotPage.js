import DefaultLayout from "../Layout/DefaultLayout";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../../config/config';
import ActionProvider from '../../utils/ActionProvider';
import MessageParser from '../../utils/MessageParser';

const ContactPage = () => {
	return (
		<DefaultLayout>
			<h1>ChatBot Page</h1>

      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
        headerText='Portfolio Chatbot'
      />
		</DefaultLayout>
	);
};

export default ContactPage;