// Чтобы проверить ДЗ-3 уберите комментарии из файла   index.html  ---->>>   <script src="dz3.js"></script> 
var userNum1 = +prompt('Введите первое число!');
var userNum2 = +prompt('Введите второе число!');
var userNum3 = +prompt('Введите третье число!');
var summ = (userNum1+userNum2+userNum3)/3;

if( userNum1 < userNum2 && userNum1 > userNum3){
    alert('Среднее число ' + userNum1 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else if( userNum2 < userNum1 && userNum2 > userNum3){
    alert('Среднее число ' + userNum2 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else if( userNum3 > userNum1 && userNum3 < userNum2){
    alert('Среднее число ' + userNum3 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else if( userNum1 > userNum2 && userNum1 < userNum3){
    alert('Среднее число ' + userNum1 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else if( userNum2 > userNum1 && userNum2 < userNum3){
    alert('Среднее число ' + userNum2 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else if( userNum3 < userNum1 && userNum3 > userNum2){
    alert('Среднее число ' + userNum3 + ' ,а среднее арифметическое число ' +  summ + ' !')
}
else{
    alert('Что то пошло не так!')
};

