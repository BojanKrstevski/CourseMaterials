let ime = "",
  prezime = "",
  index = "",
  predmet = "",
  ocena = "";
let students = [];

function validiraj() {
  ime = document.getElementById("ime").value;
  prezime = document.getElementById("prezime").value;
  index = document.getElementById("index").value;
  predmet = document.getElementById("predmet").value;
  ocena = document.getElementById("ocena").value;

  //losi slucai
  let validIndex =
    (index.length !== 6 || index.length !== 7) && /\d+/.test(index);

  let validationOutputDiv = document.getElementById("validated");
//   debugger;
//   if(ime.value.length < 3  || prezime.length < 3 || !validIndex || predmet.length < 3){

//       if(ime.value === ""){
//           ime.style.border = "1px solid red"
//       }
//       // alert('los input')
//       validationOutputDiv.innerHTML = "😢"
//       return
//   }

  validationOutputDiv.innerHTML = "✔";
}

function add() {
  let table = document.getElementById("table");
  let tableRow = document.createElement("tr");

  tableRow.innerHTML = `
        <td>${ime}</td>
        <td>${prezime}</td>
        <td>${index}</td>
        <td>${predmet}</td>
        <td>${ocena}</td>
        <td><button onclick="confirmRow(this, ${ime})" >Confirm</button> <button onclick="deleteRow(this)">Delete</button></td>
`;


  table.appendChild(tableRow);
  students.push({
    ime,
    prezime,
    index,
    predmet,
    ocena,
  });
}

function confirmRow(node, name) {
  node.parentNode.parentNode.style.backgroundColor = "lightgreen";
  node.parentNode.firstChild.disabled = "disabled";
  node.parentNode.lastChild.disabled = "disabled";
  confirmedStudents.push(name);
}

function deleteRow(node) {
  console.log(node);
  node.parentNode.parentNode.remove();
}

// document.getElementById('validateButton').addEventListener('click', validiraj)


