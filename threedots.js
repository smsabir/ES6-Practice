// Three dots spread all elements of an array to the new one.
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [ages, ages2, 5, ages3];
const allAges3 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);
console.log("See the difference\n");
console.log(allAges3);

const business = 650;
const minister = 450;
const secretary = 250;
const bankBalance = [650, 450, 250];
//const maximum = Math.max(business, minister, secretary);
const maximum = Math.max(...bankBalance);
console.log(maximum);