/* ===== DATI CASUALI ===== */

const nomi = ["Gabriele","Luca","Marco","Francesco","Andrea","Alessio","Matteo","Davide"];
const cognomi = ["Rossi","Bianchi","Romano","Greco","Esposito","Ferrari","Russo","Conti"];
const comuni = ["Palermo","Roma","Milano","Napoli","Catania","Torino","Bologna"];

function nomeCasuale(){
  return nomi[Math.floor(Math.random()*nomi.length)]+" "+
         cognomi[Math.floor(Math.random()*cognomi.length)];
}

function dataCasuale(){
  const y = 1980 + Math.floor(Math.random()*25);
  const m = 1 + Math.floor(Math.random()*12);
  const d = 1 + Math.floor(Math.random()*28);
  return d+"/"+m+"/"+y;
}

function codiceCasuale(len){
  const c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let r="";
  for(let i=0;i<len;i++)
    r+=c[Math.floor(Math.random()*c.length)];
  return r;
}

function scadenza(){
  return Math.random() > 0.25 ? "VALIDA" : "SCADUTA";
}
