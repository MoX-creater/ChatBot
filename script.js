const predefinedResponses = {
    "hello": "Hi! How can I help you?",
    "hi": "Hello! What can I do for you?",
    "how are you": "I'm doing great! Thanks for asking.",
    "bye": "Goodbye! Have a great day!",
    "help": "Sure! I can answer some basic questions."
};


function addMessage(sender, message) {

    // TODO:
    // 1. Get the chat box
    // 2. Create a new div
    // 3. Add "message" class
    // 4. Add sender class ("bot" or "user")
    // 5. Put message inside the div
    // 6. Append it to chat box
    // 7. Scroll chat box to bottom
    
  const chatbox = document.getElementById("chat-box");
  
  const div = document.createElement("div");
  
  div.classList.add("message");
  div.classList.add(sender);

  div.textContent = message;

  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}


function sendMessage() {

    // TODO:
    // 1. Get input element
    // 2. Get user's message
    // 3. Don't do anything if input is empty
    // 4. Add user message using addMessage()
    // 5. Find response from predefinedResponses
    // 6. If response doesn't exist, use a default response
    // 7. Add bot response
    // 8. Clear input
  
  const input = document.getElementById("user-input");
  const msg = input.value;

  if(msg === "") return;
  
  addMessage("user", msg);

  const res = predefinedResponses[msg] || "Sorry I can't help you with that";

  addMessage("bot", res);

  input.value = "";

}
