const messageContainer = document.getElementById("message-container");

const chatbotQnA = {
  "hi": "Hello! How can I help you today?",
  "how are you?": "I'm just a bot, but I'm doing great!",
  "what is your name?": "I'm DemoBot, your friendly assistant.",
  "can you help me?": "Sure! I can answer simple questions or chat with you.",
  "what time is it?": "You can check your system clock for the current time.",
  "goodbye": "Goodbye! Have a great day!"
};

function display(msg, type = "bot") {
  const div = document.createElement("div");
  div.classList.add(type === "bot" ? "bot-msg" : "my-msg");

  const text = document.createElement("h4");
  text.textContent = msg;

  div.appendChild(text);

  messageContainer.appendChild(div);

  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("message");
  let message = input.value.trim();
  if (!message) {
    alert("Type something");
    return;
  }

  display(message, "my");

  const lowerMessage = message.toLowerCase();

  const answer = chatbotQnA[lowerMessage];
  if (!answer) {
    display("Sorry, I can't understand you");
  } else {
    display(answer, "bot");
  }

  input.value = "";
}