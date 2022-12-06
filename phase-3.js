const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
    // Fill this in
    let total = 0;
    let answer = [];
    console.log(Date.now());
    for(let i = increment; i <= increment * 10; i = i + increment){
      total =  addNums(i);
      console.log(Date.now());
      answer.push(total);
    }
    return answer;
  }
  // Then, add timing code
  // Your code here




function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
  // Fill this in
  let total = 0;
  let answer = [];
  console.log(Date.now());
  for(let i = increment; i <= increment*10; i = i + increment ){
    total = addManyNums(i);
    console.log(Date.now());
    answer.push(total);
  }
  return  answer;


// Then, add timing code

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);