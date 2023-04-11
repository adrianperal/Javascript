function fizzbuzz() {
  let num = parseInt(prompt("Enter a number: "));
  let arr = [];
  while (true) {
    if (isNaN(num)) {
      alert("Please enter a number");
      num = parseInt(prompt("Enter a number(no letters or words): "));
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
