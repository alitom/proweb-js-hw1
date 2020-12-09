//DZ - ARRAYS 
//DZ - 1 добавить или удалить данные из массива с помощью комманд add,del
/*
const names = [],n = Infinity;
alert('Чтобы добавить данные пользуйтесь командой "add,(данные)", а для удаления данных "del," и чтобы остановить напишите "stop"!');
for(let i = 0; i < n; i++){
    let userCommand = prompt('Что будем делать: добавить или удалить ?!');
    let newArr = userCommand.split(',');
    if(newArr[0] === "add"){
        names.push(newArr[1]);
    }else if(newArr[0] === 'del'){
        for(key in names){
        names[key] === newArr[1] ? names.splice(key,1) : '';
    }
    }else if(userCommand == 'stop'){
        break;
    }else{
        console.log('Введите вашу команду в виде : add, или del, !!!')
    }
}
console.log(names); 
*/
//DZ-2

const inputData = "Пушкин - не смог писать стихи на языке JS";
let answer = 0;
    
    function vowels(){
    let strLower = inputData.toLowerCase();
    let newArray = strLower.slice('');

    //Индексы vowelWords от 0 до 5 английские гласные буквы,а остальные русские гласные буквы
    
    const vowelWords = ['a','e','i','o','u','y','а','е','ё','и','ы','о','у','э','ю','я'];
    
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] == vowelWords[0]){
            answer++
        }else if(newArray[i] == vowelWords[1]){
        answer++
    }else if(newArray[i] == vowelWords[2]){
        answer++
    }else if(newArray[i] == vowelWords[3]){
        answer++
    }else if(newArray[i] == vowelWords[4]){
        answer++
    }else if(newArray[i] == vowelWords[5]){
        answer++
    }else if(newArray[i] == vowelWords[6]){
        answer++
    }else if(newArray[i] == vowelWords[7]){
        answer++
    }else if(newArray[i] == vowelWords[8]){
        answer++
    }else if(newArray[i] == vowelWords[9]){
        answer++
    }else if(newArray[i] == vowelWords[10]){
        answer++
    }else if(newArray[i] == vowelWords[11]){
        answer++
    }else if(newArray[i] == vowelWords[12]){
        answer++
    }else if(newArray[i] == vowelWords[13]){
        answer++
    }else if(newArray[i] == vowelWords[14]){
        answer++
    }else if(newArray[i] == vowelWords[15]){
        answer++
    }else{
        answer += 0;
    }
    
}
    return answer;
}
let counted = vowels(inputData)
console.log(answer)
