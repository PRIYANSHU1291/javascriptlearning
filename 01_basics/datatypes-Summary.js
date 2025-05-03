const bigNumber = 3456543576654356754n

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "priyanshu",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myFunction);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeChannel = "one_min_updates"

let anothername = myYoutubeChannel
anothername = "anime"

console.log(anothername);
console.log(myYoutubeChannel);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo =userOne

userTwo.email = "google.com"

console.log(userOne.email);
console.log(userTwo.email);



