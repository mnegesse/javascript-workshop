function calculator(word, number1, number2){
  if(word === "add"){
    return number1 + number2;
  }
  if(word === "substract"){
    return number1 - number2;
  }
  if(word === "multiply"){
  return number1 * number2;
  }
  if(word === "divide"){
    return number1 / number2;
  }

}
let answer = calculator("add", 4, 2);
console.log(answer);
answer = calculator("substract", 8, 2);
console.log(answer);
answer = calculator("multiply", 4, 2);
console.log(answer);
answer = calculator("divide", 6, 2);
console.log(answer);
//
// function quiz(quistion, answer) {
//   let output = "";
//
//   if (quistion === "Was Kim born in 1985?"&& answer === "yes"){
//     return 1;
//   }
//
//   if (quistion === "Will Rob get out of jail?"&& answer === "No"){
//     return 1;
//   }
//
//   if (quistion === "Does North seem happy?"&& answer === "No"){
//     return 1;
//   }
//
//   if (quistion === "Kanye released 'Heartless' in 2008?"&& answer === "yes"){
//     return 1;
//   }
//   return 0;
// }
// let output = quiz("Was Kim born in 1985?", "yes")
// console.log(output);
// output = quiz("Will Rob get out of jail?", "No")
// console.log(output);
// output = quiz("Does North seem happy?", "No")
// console.log(output);
// output = quiz("Kanye released 'Heartless' in 2008?", "yes")
// console.log(output);

let questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?"
]

let answers = [
  "yes",
  "no",
  "no",
  "yes"
  ]




function ask(question, answer){
  let userinput = prompt(question, answer)
  if (answer === userinput){
    return 1;
  } else{
    return 0;
  }
}
let total = 0;

for(let i = 0; i < questions.length; i++){
  console.log(questions[i]);
  console.log(answers[i]);

  total = total + ask(questions[i], answers[i]);

  console.log("current score:", total);
  console.log(" ");
}




// let point = ask("Is Kim the best?", "true")
//
// console.log(point)
