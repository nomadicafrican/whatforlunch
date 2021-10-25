const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry === true && availableTime <= 20){
    console.log('pick something up and eat it in the back of the classroom')
  } if (hungry === true && availableTime === 30){
    console.log('You deserve a break. Go to Gastown')
  } if (hungry === false){
    console.log('You have a lot of work to do')
  } if (hungry === true && availableTime === 50){
    console.log('Remeber you have bootcamp. You dont have that much time')
  }
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);