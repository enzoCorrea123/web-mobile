let array = [23, 15, 32, 1, 6];
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

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
