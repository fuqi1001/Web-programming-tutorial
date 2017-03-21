let myObj = {
    hello: "World",
    num: 1,
    bool: true,
    myFn: ()=>{
        return "Hello";
    }
};

console.log(myObj);
myObj["new-Key1"] = "I am a new Key!";
myObj.directlyAddedKey = "I've been added!";

let keyName = "myStrKey";
myObj[keyName] = "This was made dynamically";

myObj.hello = "Hello, World";

console.log(myObj.myFn());
console.log(myObj);
