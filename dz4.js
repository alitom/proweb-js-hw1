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
