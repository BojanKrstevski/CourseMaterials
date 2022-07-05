// finish map methods
// js name collision
// this
// function default value to params
// arrow functin
// destructuring
// objects
// for methods different

// practice

// Da se napise funkcija koja sto ke proveri dali
//  na vnesen string prvite 3 karakteri
//   se so mala bukva, i ako site 3 se mali,
//    da se napravat golemi, i da se vrati
//    noviot string (edited)

let nizaBr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let kvadrati = [];

for (let index = 0; index < nizaBr.length; index++) {
  const element = nizaBr[index];
  kvadrati.push(element * element);
}

function kvadriranje(item) {
  return item * item;
}

const kvadriranje2 = (item) => {
  return item * item;
};

let kvadrati2 = nizaBr.map(function (item) {
  return item * item;
});

let studenti = [
  { name: "Ana", sex: "female" },
  { name: "Stefanija", sex: "female" },
  { name: "Mario", sex: "male" },
];

let toLowerCasedStudents = studenti.map(function (student) {
  if (student.sex === "female") {
    student.name = student.name.toLowerCase();
  }
  return student;
});


// console.log(nizaBr);
// console.log(pogolemiOd5);

let maski = studenti.filter(function(student){
    return student.sex === 'male'
})


console.log(studenti);
console.log(maski);



[1,2,3,4,5].sort()
["b","z","a"].sort()

