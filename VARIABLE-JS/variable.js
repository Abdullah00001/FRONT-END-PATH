/* const contactNumber = 9087;

const numArray = [10, 20, 30];

numArray.push(50);

numArray[4] = 60;

console.log(numArray);

numArray = [90, 60];

console.log(numArray); */

const user = {
  name: "abdullah",
  age: 22,
  address: "debiganj,panchagrah",
};

/* console.log(user);

user = { balance: 5000 };
console.log(user); */

const userPost = `Lorem ipsum dolor sit amet,${user.name.toLocaleUpperCase()} consectetur adipiscing elit. Phasellus auctor, metus eu volutpat molestie, justo libero consequat libero`;

console.log(userPost);

const numArray = [10, 20, 30];

const studentRoll = [12, 7, 4, 45];

console.log([...numArray,...studentRoll]);
