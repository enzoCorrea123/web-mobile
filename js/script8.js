let array = [10, 15, 12, 18, 13];
let auxiliar;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      auxiliar = array[i];
      array[i] = array[j];
      array[j] = auxiliar;
    }
  }
}

console.log(array[0]);
