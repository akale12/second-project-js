"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while ( num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
} 



let numTwo = 100;


while (numTwo < 105) {
    console.log(numTwo);
    numTwo++;
}


let num$3 = 500;

while (num$3 < 505) {
    console.log(num$3);
    num$3++;
}

for (let i = 1; i < 20; i++) {
    if (i === 10) {
        continue;
    }

    console.log(i);
}


for ( let i = 1; i < 30; i++) {
    if( i === 25) {
        // continue;
        break;

    }
     console.log(i);  
}

for (let i = 1; i < 20; i++) {
    if (i === 15) {
        continue;
    }
        console.log(i);
}


for (let i = 1; i < 50; i++) {
    if (i === 25) {
        continue;
    }
        console.log(i);
}


for (let i = 1; i < 15; i++) {
    if (i === 10) {
        break;
    }
        console.log(i);
}

if (50 > 220) {
    console.log('верно'); 
} else {
    console.log('не верно');
}


let task = 5+5;

 switch (task) {
     case 10:
         console.log('верно');
         break;

    case 20: 
        console.log('не верно');
        break;
    
    case 30: 
        console.log('тоже неверно');
        break;
     
     default: 
        console.log('в данном примере нет правильного ответа');   
 }   



 for (let i = 1; i < 10; i++) {
     if (i === 5 ) {
         continue;
     }
        console.log(i);
 }

 let taskTwo = 10-5;

 switch (taskTwo) {
       case 5: 
            console.log('its right');
            break;
            
        case 10:
            console.log('dont right');
            break;
            
        case 20:
            console.log('its dont right too');
            break;
            
        default:
            console.log('nothing');
            break;    
 }


 for (let i = 1; i < 10; i++) {
     if (i === 5) {
            break;
     }
        console.log(i);
 }


 const test = 3+3;

 switch (test) {
     case 6: 
         console.log('верно');
         break;

     case 7: 
        console.log('неверно');
        break;

    case 8: 
        console.log('тоже неверно');
        break;

    default:
        console.log('ничего нету');
        break;
 }