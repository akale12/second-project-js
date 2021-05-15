'use strict';

if (4 < 3) {
    console.log('ok!');
} else {
    console.log('Error');
}



// if(num < 49) {
//     console.log('Error');
// }  else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!');
// }

// (num === 50) ? console.log('ok!') :  console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку!');
        break;   
    default:
        console.log('Не в этот раз!');
        break;   
}


if (100 > 919) {
    console.log('its right');
} else {
    console.log('dont right');
}

const persone = 'David';

console.log(`Hello${persone}`);