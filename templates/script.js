function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${isUser ? 'user' : 'bot'}-message`;
    messageDiv.textContent = message;
    
  
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';

    chatBox.appendChild(messageDiv);
    
  
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 50);

    chatBox.scrollTop = chatBox.scrollHeight;
}