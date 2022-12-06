const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let total = 0;
  let answer = [];
  for(let i = increment; i <= increment * 10; i = i + increment){
    total =  addNums(i);
    answer.push(total);
  }
  return answer;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let total = 0;
  let answer = [];
  for(let i = increment; i <= increment*10; i = i + increment ){
    total = addManyNums(i);
    answer.push(total);
  }
  return  answer;

}

module.exports = [addNums10, addManyNums10];