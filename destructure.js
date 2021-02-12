/*
const person  ={ name: "Jack William", age: 19, job: "Actor", girlFriend: 'Emma Wattson', phone: 4563222, friends: 'Robert'};

// // ES5 Code:
// const gfName = person.girlFriend;
// const phone = person.phone;

// ES6 syntax: 
const {girlFriend, phone, salary} = person;

console.log(girlFriend, phone);
console.log(girlFriend, phone);
console.log(girlFriend, phone);
console.log(girlFriend, phone);

console.log(girlFriend, phone, salary); // Salary will be undefined
*/

const friends = ["William", "Robert", "Henry", "John", "Emma", "Bruce"];
const [first, ...restFriends] = friends;
//console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'Kolabagan',
        leader: 'Tiger'
    }
}

//const {leader} = complexObject.info;
const {info:{leader}} = complexObject;
console.log(leader);
