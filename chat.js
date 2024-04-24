const chat = document.getElementById('chat');
const messages = document.getElementById('messages');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

messageForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const message = messageInput.value;
	const div = document.createElement('div');
	div.textContent = message;
	messages.appendChild(div);
	messageInput.value = '';
});