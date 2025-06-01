
function speakText() {
  const text = document.getElementById("text-input").value;
  const status = document.getElementById("status");

  if (!text.trim()) {
    status.innerText = "దయచేసి టెక్స్ట్ ఇవ్వండి.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "te-IN";

  const voices = window.speechSynthesis.getVoices();
  const teluguVoice = voices.find(voice => voice.lang === "te-IN");

  if (teluguVoice) {
    utterance.voice = teluguVoice;
  }

  window.speechSynthesis.speak(utterance);
  status.innerText = "పఠనం మొదలైంది...";
}
