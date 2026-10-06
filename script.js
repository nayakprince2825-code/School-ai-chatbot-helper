
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();

  if (message === "") {
    return;
  }

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = message;

  chatBox.appendChild(userMessage);

  userInput.value = "";

  // Bot reply
  setTimeout(() => {
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    botMessage.textContent =
      "Hello! 👋 I received your question. AI connection will be added in the next step.";

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Enter key
userInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
