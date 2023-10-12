function primo(x){
  let primo = true;
  if (x == 1) {
    return "1 não é primo";
  } else if (x > 1) {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        primo = false;
        return "O número informado não é primo";
      }
    }
    return x + " é um número primo";
  } else {
    return "Não é um número primo";
  }
};
module.exports.primo = primo;
