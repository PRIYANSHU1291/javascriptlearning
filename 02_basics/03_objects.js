// singleton
// Object.create
// object literals

const { jsx } = require("react/jsx-runtime");

const mysym = Symbol("key1")

const JsUser = {
    name: "Priyanshu",
    "full name": "Priyanshu raj",
    [mysym]: "mykey1",
    age: 22,
    location: "Kolkata",
    email: "shashank.skh796@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mysym); -->not aaplicable
// console.log(JsUser[mysym])


// JsUser.email = "chatgpt@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "hello@gmail.com"




