//DZ-2 (17.11.2020)
let data = +prompt('Введите количество ступень : ');
 data = !isNaN(data) && data > 0 && data < 100 ? data : 5 ;
 let symbol1 = prompt('Введите символ отступа : ') ;
 let symbol2 = prompt('Введите конечный символ : ') ;
 let i = 1; 
 while(i <= data ){
     console.log(symbol1)
     i++;
     symbol1 = symbol2+symbol1;
 }
// for
/*
let data = +prompt('Введите количество ступень : ');
 data = !isNaN(data) && data > 0 && data < 100 ? data : 5 ;
 let symbol1 = prompt('Введите символ отступа : ') ;
 let symbol2 = prompt('Введите конечный символ : ') ;
 let i = 1; 
 for(i=1; i <= data; i++ ){
     console.log(symbol1)
     
     symbol1 = symbol2+symbol1;
 }
*/

/* ***********---DZ-2-(20.11.2020)**********----*/

//Global Variables

let minloop = +prompt('Сколько примеров хотите решать?')
let minInt = +prompt("Введите минимальное число : ");
let maxInt = +prompt("Введите максимальное число : ");

//Funtions

let randomNum = function(min,max){
    let randomizer = Math.floor(Math.random()*(max + 1 - min) + min);
    return randomizer;
}


//Loop

for(let i = 0; i < minloop; i++){
    let num1 = randomNum(minInt,maxInt);
    let num2 = randomNum(minInt,maxInt);
    //Functions
    let multiply = function(num1,num2){
        return multiply = num1 * num2;
    }
    let devide = function(num1,num2){
        return devide = num1/num2;;
    }
    let square = function(x){
        return square = x * x;
    } 
    let add = function(num1,num2){
        add = num1 + num2;
    }
    let reduce = function(num1,num2){
        reduce = num1 - num2;
    }
    let math1 = multiply(num1,num2);
    let math2 = devide(num1,num2);
    let math3 = square(num1);
    let math4 = add(num1,num2);
    let math5 = reduce(num1,num2);
    let mathType =randomNum(0,10);
    let array5 = [multiply,devide,square,add,reduce];
    let randomMath = array5[mathType];
    
    //Conditions
    if(randomMath == math1){
        let userAnswer = +prompt(num1 + ' * ' + num2 + ' = ');
        let answer = ( userAnswer == math1 ? " правильно " + math1 : ' неверно,правильный ответ: ' + math1 );
        console.log('Вы ответили ' + answer);
    }
    else if(randomMath == math2){
        let userAnswer = +prompt(num1 + ' / ' + num2 + ' = ');
        let answer = ( userAnswer == math2 ? " правильно " + math2 : ' неверно,правильный ответ: ' + math2 );
        console.log('Вы ответили ' + answer);
    }
    else if(randomMath == math3){
        let userAnswer = +prompt(num1 + ' ^ ' + ' = ');
        let answer = ( userAnswer == math3 ? " правильно " + math3 : ' неверно,правильный ответ: ' + math3 );
        console.log('Вы ответили ' + answer);
    }
    else if(randomMath == math4){
        let userAnswer = +prompt(num1 + ' + ' + num2 + ' = ');
        let answer = ( userAnswer == math4 ? " правильно " + math4 : ' неверно,правильный ответ: ' + math4 );
        console.log('Вы ответили ' + answer);
    }
    else if(randomMath == math5){
        let userAnswer = +prompt(num1 + ' - ' + num2 + ' = ');
        let answer = ( userAnswer == math5 ? " правильно " + math5 : ' неверно,правильный ответ: ' + math5 );
        console.log('Вы ответили ' + answer);
    }
    else{
        console.log(' ! ' + mathType);
    }
    
}
