function converterMorse(codigo) {
  let vetorCodigo = codigo.split(" ");
  let palavra = "";
  for (let i = 0; i < 5; i++) {
    switch(vetorCodigo[i]){
        case ".-":
            palavra = palavra + "a";
            break;
        case "-...":
            palavra = palavra + "b";
            break;
        case "-.-.":
            palavra = palavra + "c";
            break;
        case "-..":
            palavra = palavra + "d";
            break;
        case ".":
            palavra = palavra + "e";
            break;
        case "..-.":
            palavra = palavra + "f";
            break;
        case "--.":
            palavra = palavra + "g";
            break;
        case "....":
            palavra = palavra + "h";
            break;
        case "..":
            palavra = palavra + "i";
            break;
        case ".---":
            palavra = palavra + "j";
            break;
        case "-.-":
            palavra = palavra + "k";
            break;
        case ".-..":
            palavra = palavra + "l";
            break;
        case "--":
            palavra = palavra + "m";
            break;
        case "-.":
            palavra = palavra + "n";
            break;
        case "---":
            palavra = palavra + "o";
            break;
        case ".--.":
            palavra = palavra + "p";
            break;
        case "--.-":
            palavra = palavra + "q";
            break;
        case ".-.":
            palavra = palavra + "r";
            break;
        case "...":
            palavra = palavra + "s";
            break;
        case "-":
            palavra = palavra + "t";
            break;
        case "..-":
            palavra = palavra + "u";
            break;
        case "...-":
            palavra = palavra + "v";
            break;
        case ".--":
            palavra = palavra + "w";
            break;
        case "-..-":
            palavra = palavra + "x";
            break;
        case "-.--":
            palavra = palavra + "y";
            break;
        case "--..":
            palavra = palavra + "z";
            break;
    }
    
  }
  return palavra;
}
console.log(converterMorse(".- .--- ..- -.. .-"));
