//  SINTAXE DO IF / ELSE
// if (condição) {
//    CODIGO
// }
// else if (outra condição)  {
//    CODIGO
// }

// else if (mais uma condição)  {
//    CODIGO
// }

// else {
//   nenhuma das condições acima
//    CODIGO
// }

let trybe = 14.3;

if (trybe >= 14 && trybe < 14.4) {
  console.log('Esquenta!');
} else if (trybe >= 16.3 && trybe < 18) {
  console.log('Aula ao vivo!');
} else if (trybe >= 19.4 && trybe < 20) {
  console.log('Fechamento...');
} else {
  console.log('Fora dos momentos síncronos.');
}

// OUTRA MANEIRA, sem usar else if

let study = 8;

if (study > 0 && study < 5) console.log('Mais ânimo');
if (study > 5 && study < 7) console.log('Quase lá!!!');
else {
  console.log('Yes!');
}
