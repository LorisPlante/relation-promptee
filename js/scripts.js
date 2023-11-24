const chatBot = document.getElementById("chatContainer");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function openChatBot() {
  chatBot.classList.toggle("right-2");
  chatBot.classList.toggle("right-[-500px]");
}

function closeChatBot() {
  chatBot.classList.remove("right-2");
  chatBot.classList.add("right-[-500px]");
}

function sendMessage() {
  const userMessage = userInput.value;
  if (userMessage.trim() === "") {
    return;
  }

  appendMessage("user", userMessage);
  // You can add your chatbot logic here and get a response
  const botResponse = getBotResponse(userMessage);

  appendBotMessage("bot", botResponse);
  userInput.value = "";
}

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageElement.classList.add("p-2", "bg-orange", "text-white", "rounded-md", "w-10/12", "ml-auto", "mr-0", "my-2");

  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function appendBotMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender === "bot" ? "user-message" : "bot-message");
  messageElement.classList.add("p-2", "bg-gray-200", "text-black", "rounded-md", "w-10/12", "mr-auto", "ml-0");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
  // Simple example: Echo the user's message as the bot's response
  return "You said: " + userMessage;
}

// ---------- scroll down header ----------

let prevScrollPos = window.scrollY || document.documentElement.scrollTop;

window.onscroll = function () {
  const currentScrollPos = window.scrollY || document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
};

// ---------- eyes follows mouse ----------

const parent = document.getElementById("parent");
const follower = document.getElementById("follower");

document.addEventListener("mousemove", (e) => {
  const rect = parent.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;

  const clampedX = Math.min(Math.max(offsetX - follower.clientWidth / 2, 0), rect.width - follower.clientWidth);
  const clampedY = Math.min(Math.max(offsetY - follower.clientHeight / 2, 0), rect.height - follower.clientHeight);

  follower.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
});
