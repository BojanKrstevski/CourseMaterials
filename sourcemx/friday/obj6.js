// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// function countItems(arr) {
//   let hashmap = {};
//   // lookup
//   for (const el of arr) {
//     console.log(hashmap[el]);
//     if (hashmap[el]) {
//       hashmap[el] = hashmap[el] + 1;
//     } else {
//       hashmap[el] = 1;
//     }
//   }
//   return hashmap;
// }

// console.log(countItems(arr1));

// ["a", ["b", ["c"]]];

// function myFlat(arr, output = []) {
//     for (const item of arr) {
//     if (Array.isArray(item)) {
//       myFlat(item, output);
//     } else {
//       output.push(item);
//     }
//   }
//   return output
// }

// myFlat(['a', ['b', ['c']]])

// console.log(output)

// function removeFalsy(arr){
// let output = []
// for (const item of arr) {
//     if(item){
//         output.push(item)
//     }
// }
// return output

// return arr.filter(function(item){
//     if(item){
//         return true
//     }
// })

//     return arr.filter(Boolean)
// }

// console.log(removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]))
// [NaN, 0, 15, false, -22, '',undefined, 47, null]

var library = [
  { author: "Bill Gates", page: 5, title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", page: 10, title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    page: 15,
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function sortByID(arr) {
  return arr.sort(function (a, b) {
    return a.libraryID - b.libraryID;
  });
}
console.log(sortByID(library));

function getNames(arr) {
  return arr.map((book) => {
    return book.title;
  });
}
console.log(getNames(library));

function totalPages(arr) {
  let numOfPages = 0;
  arr.forEach((book) => {
    numOfPages += book.page;
  });

  return numOfPages;
}
console.log(totalPages(library));

let obj1 = {
  obj2: {
    obj3: {
      name: "name",
      niza: [
          {
              
          }
      ]
    },
  },
};
let { name } = obj1.obj2.obj3;
