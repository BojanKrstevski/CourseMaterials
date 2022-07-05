const factorial = (num) => {
  if (num === 1) {
    // 1! = 1
    return 1;
  } else {
    // 5! = 5 * 4!
    return num * factorial(num - 1);
  }
};

// 5! = 5 * 4 * 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1

[1, 2, 3, 4, 5];

function rmv(arr) {
  if (arr.length === 0) {
    return arr;
  } else {
    arr.pop();
    return rmv(arr);
  }
}

[];

// 1 2 3 5 8 13 21

//

factorial(4);
console.log(factorial(4));

function factorial(n) {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; ++i) {
    result *= i;
  }
  return result;
}

const factorial = (num) => {
  if (num === 1) {
    // 1! = 1
    return 1;
  } else {
    // 5! = 5 * 4!
    return num * factorial(num - 1);
  }
};
