/* ===== AUDIO RADIO ===== */
const sndRadioOn = new Audio("audio/radio_on.wav");
const sndRadioOff = new Audio("audio/radio_off.wav");
const sndBeep = new Audio("audio/beep.wav");

/* ===== LOG ===== */
function logMsg(who,text){
  const d=document.createElement("div");
  d.className="msg "+who;
  d.textContent=who.toUpperCase()+": "+text;
  radioLog.appendChild(d);
  radioLog.scrollTop=radioLog.scrollHeight;
}

function logSys(t){
  logMsg("sys",t);
}

/* ===== VOCE ===== */
function speak(t){
  if(!("speechSynthesis" in window)) return;
  const u=new SpeechSynthesisUtterance(t);
  u.lang="it-IT";
  u.rate=0.95;
  u.pitch=0.9;
  speechSynthesis.speak(u);
}

/* ===== RADIO TX ===== */
function radioTransmit(){
  const input=document.getElementById("radio-input");
  if(!input.value) return;

  sndRadioOn.currentTime=0;
  sndRadioOn.play();

  logMsg("volante",input.value);
  input.value="";

  setTimeout(()=>{
    sndRadioOff.currentTime=0;
    sndRadioOff.play();

    logMsg("centro","Ricevuto, avanti.");
    speak("Ricevuto, avanti.");
  },700);
}

/* ===== EVENTI SISTEMA ===== */
function radioBeep(){
  sndBeep.currentTime=0;
  sndBeep.play();
}
