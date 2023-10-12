for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log(i,"fizzbuzz");
    } else {
      console.log(i,"buzz");
    }
  } else if (i % 5 == 0) {
    console.log(i,"fizz");
  }
}
