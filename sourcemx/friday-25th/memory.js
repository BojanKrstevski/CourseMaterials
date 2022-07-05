// 5x4 grid

// DOG https://cdn.vectorstock.com/i/thumb-large/96/46/dog-line-minimal-icon-vector-17149646.webp
// CAT https://cdn.vectorstock.com/i/thumb-large/21/35/black-cartoon-cat-head-with-eyes-vector-37132135.webp
// GIRAFFE https://cdn.vectorstock.com/i/thumb-large/28/16/giraffe-rgb-color-icon-vector-32782816.webp
// ELEPHANT https://cdn.vectorstock.com/i/thumb-large/05/34/elephant-standing-icon-brand-isolated-vector-40830534.webp
// RACOON https://cdn.vectorstock.com/i/thumb-large/37/51/raccoon-icon-outline-vector-28383751.webp
// ZEBRA https://cdn.vectorstock.com/i/thumb-large/38/23/zebra-logo-icon-vector-21013823.webp
// FISH https://cdn.vectorstock.com/i/thumb-large/23/36/fish-icon-vector-2982336.webp
// MONKEY https://cdn.vectorstock.com/i/thumb-large/13/72/monkey-on-white-background-wild-animal-vector-14981372.webp
// GOPHER https://cdn.vectorstock.com/i/thumb-large/66/39/gopher-icon-vector-10786639.webp
// PIG https://cdn.vectorstock.com/i/thumb-large/96/80/pig-icon-vector-9549680.webp

let images = [
  {
    id: 1,
    animal: "dog",
    url: "https://cdn.vectorstock.com/i/thumb-large/96/46/dog-line-minimal-icon-vector-17149646.webp",
  },
  {
    id: 2,
    animal: "cat",
    url: "https://cdn.vectorstock.com/i/thumb-large/21/35/black-cartoon-cat-head-with-eyes-vector-37132135.webp",
  },
  {
    id: 3,
    animal: "giraffe",
    url: "https://cdn.vectorstock.com/i/thumb-large/28/16/giraffe-rgb-color-icon-vector-32782816.webp",
  },
  {
    id: 4,
    animal: "elephant",
    url: "https://cdn.vectorstock.com/i/thumb-large/05/34/elephant-standing-icon-brand-isolated-vector-40830534.webp",
  },
  {
    id: 5,
    animal: "racoon",
    url: "https://cdn.vectorstock.com/i/thumb-large/37/51/raccoon-icon-outline-vector-28383751.webp",
  },
  {
    id: 6,
    animal: "zebra",
    url: "https://cdn.vectorstock.com/i/thumb-large/38/23/zebra-logo-icon-vector-21013823.webp",
  },
  {
    id: 7,
    animal: "fish",
    url: "https://cdn.vectorstock.com/i/thumb-large/23/36/fish-icon-vector-2982336.webp",
  },
  {
    id: 8,
    animal: "monkey",
    url: "https://cdn.vectorstock.com/i/thumb-large/13/72/monkey-on-white-background-wild-animal-vector-14981372.webp",
  },
  {
    id: 9,
    animal: "gopher",
    url: "https://cdn.vectorstock.com/i/thumb-large/66/39/gopher-icon-vector-10786639.webp",
  },
  {
    id: 10,
    animal: "pig",
    url: "https://cdn.vectorstock.com/i/thumb-large/96/80/pig-icon-vector-9549680.webp",
  },
];

let defaultBackground = "default";

let gameField = document.getElementById("memory-game");
let open = [];
let defaultImg = "./images/default.png";

function flipImage(imageNode, image) {
  imageNode.src = image;
  open.push(imageNode);
  checkMatch();
}

function checkIfEnd() {
//   console.log("hi");
//   let gameField = document.getElementById("memory-game");
//   let frozenCount = 0;
//   for (const node of gameField.childNodes) {
//     node.firstChild.src = defaultImg;
//     if (node.firstChild.getAttribute("data-frozen") === "frozen") {
//       frozenCount++;
//     }
//   }

//   if (frozenCount === gameField.childNodes.length) {
//     alert("Good job");
//   }
}

function checkMatch() {
  if (open.length === 2) {
    if (
      open[0].getAttribute("data-animal-name") ===
      open[1].getAttribute("data-animal-name")
    ) {
      //match
      open[0].setAttribute("data-frozen", "frozen");
      open[0].style.outline = "1px solid green";
      open[1].setAttribute("data-frozen", "frozen");
      open[1].style.outline = "1px solid green";

      //   checkIfEnd();
    } else {
        setTimeout(closeAllUnmatched, 1000);
    }
    open = [];
  }
}

function closeAllUnmatched() {
  let gameField = document.getElementById("memory-game");
  for (const node of gameField.childNodes) {
    if (node.firstChild.getAttribute("data-frozen") !== "frozen") {
      node.firstChild.src = defaultImg;
    }
  }
}

for (const img of [...images, ...images]) {
  let memoryBlock = document.createElement("div");
  let image = document.createElement("img");

  let animalImage = `./images/${img.animal}.webp`;
  // image.src = `./images/${img.animal}.webp`;
  image.src = defaultImg;
  image.style.width = "200px";
  image.style.height = "200px";

  image.addEventListener("click", () => flipImage(image, animalImage));
  image.setAttribute("data-id", img.id);
  image.setAttribute("data-frozen", "unfrozen");
  image.setAttribute("data-animal-name", img.animal);
  image.setAttribute("data-animal-image", `./images/${img.animal}.webp`);

  image.alt = img.animal.toUpperCase();
  memoryBlock.appendChild(image);
  //   console.log(memoryBlock, image, gameField);
  gameField.appendChild(memoryBlock);
}

/*


1. Vo array da gi stavime slikite shto ke gi koristime
2. Shuffle the array (niza od ids, math random)
3. For loop to generate squares
4. Make the square show the image (flip it)
5. Save counters/state how many are open
6. If two images are open, compare them
7. If they are the same freeze them, if they are not switch them back after 2 seconds
8. If we founda match, we freeze && check if game has ended


*/
