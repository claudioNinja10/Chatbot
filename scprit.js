function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    chatMessages.appendChild(userMessage);

    // You can add logic to process the user input and generate bot responses here
    // For simplicity, I'm just echoing the user's message back as a bot response
    const botResponse = document.createElement('div');
    botResponse.className = 'bot-response';
    botResponse.textContent = `Bot: ${userInput}`;
    chatMessages.appendChild(botResponse);

    // Clear the input field
    document.getElementById('user-input').value = '';
}
