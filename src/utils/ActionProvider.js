class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hello! Please check out my awesome projects!")
    this.updateChatbotState(greetingMessage)
  }

  randomResponse() {
    const randomResponseArray = ["I'm currently riding the variable choo choo train!", "I will always remember my teacher's wise words: Step 1: give it a go. Step 2: make it work. Step 3: make it pretty.", "It's not a bug; it's an undocumented feature.", "Code is like humor. When you have to explain it, it's bad."]

    const randomResponseItem = randomResponseArray[Math.floor(Math.random()*randomResponseArray.length)]
    const randomResponseMessage = this.createChatBotMessage(randomResponseItem)
    this.updateChatbotState(randomResponseMessage)
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider