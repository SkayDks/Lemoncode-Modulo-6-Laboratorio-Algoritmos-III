/**  ---- Agenda -----*/

// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

function randomizedSchedule(team) {
  for (let worker of team) {
    for (let i in worker.availability) {
      worker.availability[i] = Math.round(Math.random());
    }
  }
}

function createSchedule(hours, availability, element) {
  for (let i in hours) {
    let spanElement = document.createElement("span");
    spanElement.innerText = hours[i] + ": " + (availability[i] ? "Si" : "No");
    element.appendChild(spanElement);
  }
}

function createWorker(hours, obj) {
  for (let worker of obj) {
    let fatherElement = document.createElement("div");
    let title = document.createElement("span");
    title.innerText = "Disponibilidad de " + worker.name;
    fatherElement.setAttribute("class", "worker");
    fatherElement.appendChild(title);
    createSchedule(hours, worker.availability, fatherElement);
    document.querySelector("#schedule").append(fatherElement);
  }
}

function isFreeTime(hours, team) {
  let freeTime;
  for (let i in hours) {
    freeTime = true;
    for (let worker of team) {
      freeTime = worker.availability[i] && freeTime;
    }
    if (freeTime) return "Hueco encontrado en el horario " + hours[i];
  }
  return "Lo siento. No hay hueco disponible en el equipo.";
}

function printAvailability(hours, team) {
  let fatherElement = document.querySelector(".footer");
  let spanElement = document.createElement("span");
  spanElement.innerText = isFreeTime(hours, team);
  fatherElement.appendChild(spanElement);
}

randomizedSchedule(myTeam);
createWorker(WORK_HOURS, myTeam);
printAvailability(WORK_HOURS, myTeam);

/** ----- Calculadora de cambio óptimo ----- */

let currencies = [
  { 200: 0 },
  { 100: 0 },
  { 50: 0 },
  { 20: 0 },
  { 10: 0 },
  { 5: 0 },
  { 2: 0 },
  { 1: 0 },
  { 0.5: 0 },
  { 0.2: 0 },
  { 0.1: 0 },
  { 0.05: 0 },
  { 0.02: 0 },
  { 0.01: 0 },
];

function cashRegister(obj, nMoney) {
  let fatherElement = document.createElement("div");
  let element = document.createElement("input");
  element.setAttribute("value", obj[nMoney]);
  element.addEventListener(
    "change",
    (e) => (obj[nMoney] = e.target.valueAsNumber)
  );
  element.setAttribute("type", "number");
  fatherElement.appendChild(element);
  element = document.createElement("span");
  element.innerText = nMoney + "€";
  fatherElement.appendChild(element);
  return fatherElement;
}

function printCashRegister(obj) {
  let fatherElement = document.querySelector(".cashRegister");
  for (let i in obj) {
    fatherElement.appendChild(cashRegister(obj[i], Object.keys(obj[i])[0]));
  }
}

function printChange(currency, n) {
  let fatherElement = document.querySelector(".printCalculate");
  let spanElement = document.createElement("span");
  let billOrCoin = currency >= 5 ? "billete" : "moneda";
  let oneOrMany = n > 1 ? "s" : "";
  spanElement.innerText =
    n + " " + billOrCoin + oneOrMany + " de " + currency + "€";
  fatherElement.appendChild(spanElement);
}

function calculate(payment, amount, currency) {
  let change = payment - amount;
  let nCurrency, nMoney;
  for (let i in currency) {
    nMoney = parseFloat(Object.keys(currency[i])[0]);
    if (currency[i][nMoney] !== 0) {
      nCurrency = Math.floor(change / nMoney);
      if (nCurrency >= 1) {
        nCurrency = currency[i][nMoney] < nCurrency ? currency[i][nMoney] : nCurrency ;
        change = change - nCurrency * nMoney;
        printChange(nMoney, nCurrency);
      }
    } else {
      console.log("No hay cambio");
    }
  }
}

function handleCalculate() {
  let amount = document.querySelector("#totalAmount").valueAsNumber;
  let payment = document.querySelector("#payment").valueAsNumber;
  let printCalculate = document.querySelector(".printCalculate");
  if (printCalculate.childElementCount > 1) {
    for (let i = printCalculate.childElementCount; i > 1; i--) {
      printCalculate.removeChild(printCalculate.lastChild);
    }
  }
  calculate(payment, amount, currencies);
}

printCashRegister(currencies);
document.querySelector("#calculate").addEventListener("click", handleCalculate);
