const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// ES6 Template
const fullName2 = `${firstName} ${lastName} is a singer.`;
console.log(fullName2);

const multiLine = "\nThe world is in Danger!\n"
    + "Human are responsible for that..\n"
    + "But human can fix some of these issues too..\n";

console.log(multiLine);

//ES6 Multiline template
const multiLine2 = `We have to take steps.
Make the world carbon neutral.
Plant more trees.
Reduce global warming.`
console.log(multiLine2);