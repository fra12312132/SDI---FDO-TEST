function pm(){
  radioBeep();
  logSys("Chiamata PM in corso...");
  setTimeout(()=>{
    stato.pm = true;
    logMsg("centro","PM di turno autorizza procedura.");
    speak("PM di turno autorizza procedura.");
    radioBeep();
  },3500);
}

function documento(){
  const tipi = ["Patente di guida","Carta d'identità","Assicurazione RCA"];
  const tipo = tipi[Math.floor(Math.random()*tipi.length)];
  const statoDoc = scadenza();

  let html = `
  <div class="doc ${statoDoc==="SCADUTA" ? "bad" : "ok"}">
    <h3>${tipo}</h3>
    <p><b>Intestatario:</b> ${nomeCasuale()}</p>
    <p><b>Comune:</b> ${comuni[Math.floor(Math.random()*comuni.length)]}</p>
    <p><b>Numero:</b> ${codiceCasuale(10)}</p>
    <p><b>Scadenza:</b> ${statoDoc}</p>
  </div>`;

  sdiPanel.innerHTML = html;

  if(statoDoc === "SCADUTA"){
    logMsg("centro","Documento NON valido.");
    speak("Attenzione, documento non valido.");
  } else {
    logMsg("centro","Documento regolare.");
    speak("Documento regolare.");
  }
}

function verbaleFermo(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>VERBALE DI FERMO STRADALE</h2>

    <label>Luogo del controllo</label>
    <input type="text">

    <label>Data</label>
    <input type="date">

    <label>Ora</label>
    <input type="time">

    <label>Nominativo conducente</label>
    <input type="text">

    <label>Data di nascita</label>
    <input type="date">

    <label>Veicolo (marca/modello)</label>
    <input type="text">

    <label>Targa</label>
    <input type="text">

    <label>Motivo del fermo</label>
    <textarea rows="3"></textarea>

    <label>Provvedimenti adottati</label>
    <textarea rows="3"></textarea>

    <label>Agenti operanti</label>
    <input type="text">

    <div class="doc-footer">
      <button onclick="confermaFermo()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

// FUNZIONE GLOBALE, accessibile da onclick
function confermaFermo(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Verbale di fermo", dati);

  logMsg("centro","Verbale di fermo stradale redatto e registrato.");
  speak("Verbale di fermo stradale registrato.");
  sdiPanel.innerHTML = "<em>Verbale archiviato.</em>";
}


function verbaleMulta(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>VERBALE DI CONTESTAZIONE CDS</h2>

    <label>Articolo violato</label>
    <input type="text">

    <label>Trasgressore</label>
    <input type="text">

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Veicolo (marca/modello)</label>
    <input type="text">

    <label>Targa</label>
    <input type="text">

    <label>Importo sanzione (€)</label>
    <input type="number">

    <label>Note aggiuntive</label>
    <textarea rows="3"></textarea>

    <div class="doc-footer">
      <button onclick="confermaMulta()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaMulta(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Multa CDS", dati);

  logMsg("centro","Verbale di multa CDS redatto e registrato.");
  speak("Verbale di multa registrato.");
  sdiPanel.innerHTML = "<em>Verbale archiviato.</em>";
}

function fermoVeicolo(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>FERMO AMMINISTRATIVO VEICOLO</h2>

    <label>Veicolo (marca/modello)</label>
    <input type="text">

    <label>Targa</label>
    <input type="text">

    <label>Conducente</label>
    <input type="text">

    <label>Motivo del fermo</label>
    <textarea rows="3"></textarea>

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Agenti operanti</label>
    <input type="text">

    <div class="doc-footer">
      <button onclick="confermaFermoVeicolo()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaFermoVeicolo(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Fermo Veicolo", dati);

  logMsg("centro","Fermo amministrativo veicolo registrato.");
  speak("Fermo veicolo registrato.");
  sdiPanel.innerHTML = "<em>Fermo veicolo archiviato.</em>";
}

function sequestro(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>SEQUESTRO</h2>

    <label>Oggetto del sequestro</label>
    <input type="text">

    <label>Proprietario</label>
    <input type="text">

    <label>Motivo</label>
    <textarea rows="3"></textarea>

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Agenti operanti</label>
    <input type="text">

    <div class="doc-footer">
      <button onclick="confermaSequestro()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaSequestro(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Sequestro", dati);

  logMsg("centro","Sequestro registrato.");
  speak("Sequestro registrato.");
  sdiPanel.innerHTML = "<em>Sequestro archiviato.</em>";
}

function denuncia(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>DENUNCIA S.L.</h2>

    <label>Denunciante</label>
    <input type="text">

    <label>Denunciato</label>
    <input type="text">

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Luogo</label>
    <input type="text">

    <label>Fatti denunciati</label>
    <textarea rows="4"></textarea>

    <label>Agenti operanti</label>
    <input type="text">

    <div class="doc-footer">
      <button onclick="confermaDenuncia()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaDenuncia(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Denuncia S.L.", dati);

  logMsg("centro","Denuncia S.L. registrata.");
  speak("Denuncia registrata.");
  sdiPanel.innerHTML = "<em>Denuncia archiviata.</em>";
}

function arresto(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>ARRESTO</h2>

    <label>Arrestato</label>
    <input type="text">

    <label>Reato contestato</label>
    <input type="text">

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Luogo</label>
    <input type="text">

    <label>Agenti operanti</label>
    <input type="text">

    <label>Note operative</label>
    <textarea rows="3"></textarea>

    <div class="doc-footer">
      <button onclick="confermaArresto()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaArresto(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Arresto", dati);

  logMsg("centro","Arresto registrato.");
  speak("Arresto registrato.");
  sdiPanel.innerHTML = "<em>Arresto archiviato.</em>";
}


function fotosegnalamento(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>FOTOSEGNALAMENTO</h2>

    <label>Soggetto</label>
    <input type="text">

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Motivo</label>
    <textarea rows="3"></textarea>

    <label>Note aggiuntive</label>
    <textarea rows="2"></textarea>

    <div class="doc-footer">
      <button onclick="confermaFoto()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaFoto(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Fotosegnalamento", dati);

  logMsg("centro","Fotosegnalamento registrato.");
  speak("Fotosegnalamento registrato.");
  sdiPanel.innerHTML = "<em>Fotosegnalamento archiviato.</em>";
}

function impronte(){
  sdiPanel.innerHTML = `
  <div class="documento">
    <h1>POLIZIA DI STATO</h1>
    <h2>RILIEVO IMPRONTE DIGITALI</h2>

    <label>Soggetto</label>
    <input type="text">

    <label>Metodo (inchiostro / scanner)</label>
    <input type="text">

    <label>Data e Ora</label>
    <input type="datetime-local">

    <label>Note operative</label>
    <textarea rows="3"></textarea>

    <div class="doc-footer">
      <button onclick="confermaImpronte()">Conferma</button>
      <button onclick="annulla()">Annulla</button>
    </div>
  </div>`;
}

function confermaImpronte(){
  const inputs = sdiPanel.querySelectorAll("input, textarea");
  const dati = {};
  inputs.forEach(i => {
    dati[i.previousElementSibling.textContent] = i.value;
  });

  aggiungiStorico("Rilievo impronte", dati);

  logMsg("centro","Rilievo impronte registrato.");
  speak("Rilievo impronte registrato.");
  sdiPanel.innerHTML = "<em>Rilievo archiviato.</em>";
}

