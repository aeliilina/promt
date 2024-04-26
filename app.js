//создали функцию промт чтобы ввели слово
//создали переменные для того чтобы туда ввели 
// переменная чтобы посчитали  (использовали с помщью length)
// достали через html дивы чтобы было видно колво букв на экране
//также ддостали кнопку из html чтобы пользователь опять мог написать
  function countLetters() {
    var word = prompt("Введите слово:");
    var  wordCount = word.length;
    
    document.getElementById("Count").textContent = "Количество букв в слове: " + letterCount;
}


document.getElementById("Button").addEventListener("click", countLetters);

countLetters();