const messages = {
  happy: [
    "Keep smiling, it suits you! 😊",
    "Happiness is contagious—spread it!",
    "Enjoy this moment, you deserve it!"
  ],
  sad: [
    "It's okay to feel sad. Brighter days are coming 🌈",
    "Take a deep breath. You're doing your best!",
    "Let it out. Emotions make us human 💙"
  ],
  angry: [
    "Pause. Breathe. Peace starts with you 🧘",
    "Let go of what you can't control.",
    "Channel your energy into something positive 🔥"
  ],
  anxious: [
    "You are safe, you are strong, you can do this.",
    "Breathe in calm, breathe out worry 💨",
    "One step at a time. You’ve got this."
  ],
  excited: [
    "Your energy is electric! ⚡",
    "Turn that excitement into action!",
    "Something great is coming—stay pumped!"
  ]
};

function showMessage() {
  const mood = document.getElementById("moodSelect").value;
  if (mood) {
    const message = getRandomMessage(mood);
    document.getElementById("messageText").innerText = message;
    document.getElementById("messageBox").classList.remove("hidden");
    localStorage.setItem("lastMood", mood);
    localStorage.setItem("lastMessage", message);
  }
}

function newMessage() {
  const mood = document.getElementById("moodSelect").value;
  const message = getRandomMessage(mood);
  document.getElementById("messageText").innerText = message;
  localStorage.setItem("lastMood", mood);
  localStorage.setItem("lastMessage", message);
}

function getRandomMessage(mood) {
  const list = messages[mood];
  return list[Math.floor(Math.random() * list.length)];
}

// Restore previous mood/message on reload
window.onload = () => {
  const savedMood = localStorage.getItem("lastMood");
  const savedMessage = localStorage.getItem("lastMessage");
  if (savedMood && savedMessage) {
    document.getElementById("moodSelect").value = savedMood;
    document.getElementById("messageText").innerText = savedMessage;
    document.getElementById("messageBox").classList.remove("hidden");
  }
};
