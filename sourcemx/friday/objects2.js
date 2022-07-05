const arrayOfNumbers = [];

for (let value = 10; value <= 50; value += 10) {
  arrayOfNumbers.push(value);
}

// console.log(arrayOfNumbers)

// bad

for (let index = 0; index < arrayOfNumbers.length; index++) {
  const element = arrayOfNumbers[index];
  // console.log(element);
}

const numbers = [10, 20, 30, 40, 50];

for (const index in numbers) {
  //   console.log(index);
  //   console.log(numbers[index]);
}

for (const number of numbers) {
  if (number >= 30) {
    break;
  }
//   console.log(number);
}

numbers.forEach((value, index, array) => {
  //   console.log(value);
  //   console.log(index);
});

function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}

(async function () {
  const ids = [10, 20, 30];
//   for (const id of ids) {
//     await getById(id);
//   }

  ids.forEach(async (id) => {
      await getById(id);
    });
})();





