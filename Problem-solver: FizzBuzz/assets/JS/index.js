function fizzbuzz() {
  let num = parseInt(prompt("Enter a number form 1 to N"));
  let arr = [];
  while (true) {
    if (isNaN(num) || num < 1) {
      num = parseInt(prompt("No letters or words, just positive natural numbers"));
    } else {
      for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
          arr.push("Fizz");
        } else if (i % 5 === 0) {
          arr.push("Buzz");
        } else arr.push(i);
      }
      break;
    }
  }
  alert(arr);
}
