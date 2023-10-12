let palindromo = "kayaq";
let inverso = true;
let j = palindromo.length;
for (let i = 0; i < palindromo.length; i++) {
  if (palindromo.charAt(i) != palindromo.charAt(j - 1)) {
    inverso = false;
  }
  j--;
}
console.log(inverso);
