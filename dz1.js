// Чтобы проверить ДЗ-1 уберите комментарии из файла   index.html  ---->>>   <script src="dz1.js"></script> 
var userAge1 = +prompt('Введите свой возраст в цыфрах');
if (userAge1 >= 1 && userAge1 <= 18){
    alert('Вы ещё молоды')
}
else if (userAge1 >= 19 && userAge1 <= 50){
    alert('Вам нужно работать')
}
else if (userAge1 >= 51 && userAge1 <= 59){
    alert('Вам скоро на пенсию')
}
else if (userAge1 >= 60 && userAge1 <= 150){
    alert('Вы пенсионер')
}
else{
    alert('Что-то пошло не так!')
};