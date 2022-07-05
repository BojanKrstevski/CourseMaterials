// import users from "./users.json"
// Memory
// Calculator
// League
// Stopwatch

// const timeout = setTimeout(function(){
//     // kod za zatvoranje
// }, 1000 )

// if(user === 'admin'){
//     clearTimeout(timeout)
// }

// // za 2 sekundi od sega zatvori go prozorecot

// const interval = setInterval(function(){
//     // kod za povtoruvanje
// }, 1000)

// const interval = setInterval(function(){
//     // kod za povtoruvanje
// }, 1000)

// clearInterval(interval)

let counter = 0;
let tweets = [
  "Trump said hi",
  "Doge to the moon",
  "Dobro utro mkd",
  "Prayers for Ukraine",
];


let tweetsList = document.getElementById("tweet-messages");
const interval = setInterval(() => {
  let tweet = document.createElement("p");
  tweet.appendChild(document.createTextNode(tweets[counter]));
  counter++;
  tweetsList.appendChild(tweet);

  if(counter > tweets.length - 1){
      clearInterval(interval)
  }
}, 1000);

//JSON
// JavaScript Object Notation

let usersJSON = {
    "key" : "value",
    "key1" : 5,
    "key2" : true,
    "key3" : false,
    "key4" : null,
    "key5" : {
        "key" : "value",
        "array" : ["stis"]
    }
}

let stringFromObj = JSON.stringify(usersJSON)
document.write(stringFromObj)



console.log(stringFromObj)

let objFromString = JSON.parse(stringFromObj)
console.log(objFromString)


let newObjCopy = JSON.parse(JSON.stringify(usersJSON))

let a = JSON.stringify('{[1,2,3]: "yes"}')
console.log(a)


