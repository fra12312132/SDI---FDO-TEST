let scenari = [];

/* ===== CARICA SCENARI ===== */
fetch("data/scenari.json")
  .then(r => r.json())
  .then(d => {
    scenari = d;
    logSys("Scenari operativi caricati.");
  });

/* ===== AVVIO SCENARIO ===== */
function avviaScenario(){
  if(!scenari.length){
    toast("Scenari non caricati","err");
    return;
  }

  const sc = scenari[Math.floor(Math.random()*scenari.length)];
  logMsg("centro", sc.radio);
  speak(sc.radio);

  sdiPanel.innerHTML = `
    <div class="card">
      <b>Scenario:</b>
      <p>${sc.descrizione}</p>
      <p><em>Tipo:</em> ${sc.tipo}</p>
    </div>`;
}

const sdiPanel = document.getElementById("sdi-panel");
const radioLog = document.getElementById("radio-log");

function logMsg(da, testo){
  const div = document.createElement("div");
  div.className = "msg " + da;
  div.textContent = da.toUpperCase() + ": " + testo;
  radioLog.appendChild(div);
  radioLog.scrollTop = radioLog.scrollHeight;
}

function logSys(testo){
  logMsg("sys", testo);
}

function radioBeep(){}

function speak(testo){}

const storico = []; // array per salvare tutti i verbali / atti compilati

function aggiungiStorico(tipo, contenuto){
  const ora = new Date();
  storico.push({
    tipo: tipo,
    contenuto: contenuto,
    timestamp: ora.toLocaleString()
  });
  logMsg("sys", `Aggiunto allo storico: ${tipo}`);
}


