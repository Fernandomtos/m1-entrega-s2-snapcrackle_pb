// S4-19 | Entrega

function snapCrackle(maxValue) {
    let stringObtida = "";
    for (let i=1; i <=maxValue; i++) {
        if (i%5 == 0) {
            if (i%2 != 0) {
                stringObtida += ","+" "+"SnapCrackle";
            } else {
                stringObtida += ","+" "+"Crackle";
            }
        } else if (i%2 != 0) {
            stringObtida += ","+" "+"Snap";
        } else {
            stringObtida += ","+" "+`${i}`;
        }
    }
    stringObtida = stringObtida.substring(2);
    return stringObtida;    

}
console.log(snapCrackle(12));





////// com array, apenas para meu estudo... o exercício pede pra concatenar e não colocar em uma lista!

// function snapCrackle(maxValue) {
//     let stringObtida = [];
//     for (let i=1; i <=maxValue; i++) {
//         if (i%5 == 0) {
//             if (i%2 != 0) {
//                 stringObtida.push("SnapCrackle");
//             } else {
//                 stringObtida.push("Crackle");
//             }
//         } else if (i%2 != 0) {
//             stringObtida.push("Snap")
//         } else {
//             stringObtida.push(`${i}`);
//         }
//     }
//     return stringObtida;    

// }
// console.log(snapCrackle(12));
// let nome = `${snapCrackle(12)}`;
// console.log(nome);

// for de 1 até i <= maxValue;

// se for impar concatenar snap no final;

// se for multiplo de 5 no lugar dele concatenar Crackle no final da String;

// se nao for impar nem multiplo de 5 concatenar o proprio numero no final da String;

// separar sempre por virgula e espaço