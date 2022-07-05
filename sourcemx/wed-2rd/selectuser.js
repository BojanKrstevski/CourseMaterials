let students = [
  "stefan nikolovski",

  "ivan",
  "sebair",
  "vasko",
  "dragana",

  "bojan",
  "kire",
  "petar",
  "tamara",
  "darko",
  "kiril",
  "nadica",
  "andrijana",
  "denis",
  "ivona",
  "stefan dodevski",
];



function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function getStudent() {
  let rndStudent = shuffle(students)[0];
  console.log(rndStudent);
}
