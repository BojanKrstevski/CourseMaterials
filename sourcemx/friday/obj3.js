const arrayOfNumbers = [];

for (let value = 10; value <= 50; value += 10) {
  arrayOfNumbers.push(value);
}

//bad

// <= , different name, initializa inproper, inproper increment, bad variable

for (let index = 0; index < arrayOfNumbers.length; index++) {
  const element = arrayOfNumbers[index];
  console.log(element);
}

const numbers = [10, 20, 30, 40, 50];

for (const index in numbers) {
  console.log(index);
  //derefference
  console.log(numbers[index]);
}

// const numbers = [10,20,30,40,50]
//es6
for (const number of numbers) {
  console.log(number);
}

// cant use break
// incompatible with async/await
numbers.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
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
  // for(const id of ids){
  //     await getById(id)
  // }

  ids.forEach(async (id) => {
    await getById(id);
  });
})();
