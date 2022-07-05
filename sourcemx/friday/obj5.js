// const obj = { name: "mario", padding: "14px" };

// console.log(Object.entries(obj));
// Object.values();
// Object.entries();

for (const key of Object.keys({})) {
  //   console.log(key);
}

function upperCase(input) {}

String.prototype.upperCase = function () {
  return this.toUpperCase();
};

let studenti = ["Darko", "Ivana"];

let darko = studenti[0];
let ivana = studenti[1];

let [masko, zensko] = studenti;

let participant = {
  prv: "John",
  vtor: "Bill",
  tret: "David",
};

let prv = participant.prv;
let vtor = participant.vtor;
let tret = participant.tret;

let { prv, vtor, tret } = participant;



