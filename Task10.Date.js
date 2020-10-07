console.clear();
//Задание 1. Получить текущую дату, вывести в консоль

let date = new Date();
console.log(`Задание 1. Получить текущую дату, вывести в консоль`);
console.log(date.toString());

//Задание 2. Получить день, месяц и год текущей даты и по отдельности вывасти в консоль
console.log(`Задание 2. Получить день, месяц и год текущей даты и по отдельности вывасти в консоль`);
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());

//Задание 3. Задания из теории
console.log(`Задание 3. Задания из теории`);



//1.Создайте дату
let date1 = new Date(2012, 1, 20, 3, 12);
console.log(`1.Создайте дату`);
console.log(date1);



//2. Покажите день недели
console.log(`2. Покажите день недели`);

function getWeekDay(date) {
    let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysOfWeek[date.getDay()];
}
console.log(getWeekDay(date));



//3. День недели в европейской нумерации
console.log(`3. День недели в европейской нумерации`);

function getLocalDay(date) {
    let daysOfWeek = [ 0, 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
    return daysOfWeek[date.getDay() +1];
}
console.log(getWeekDay(date));



//4. Какой день месяца был много дней назад
console.log(`4. Какой день месяца был много дней назад`);
function getDateAgo(date, days){
    let newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
   // return date.getDate() - days;
    return newDate.toLocaleDateString();
}
console.log (getDateAgo(date, date.getDate()));

//5. Последнее число месяца
console.log(`5. Последнее число месяца`);
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
console.log (getLastDayOfMonth(date.getFullYear(), date.getMonth()));

//6. Сколько сегодня прошло секунд
console.log(`6. Сколько сегодня прошло секунд`);
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return ((now - today) / 1000); 
  }
  console.log(getSecondsToday());

//7. Сколько секунд осталось до завтра
console.log(`7. Сколько секунд осталось до завтра`);
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    return ((tomorrow - now) / 1000); 
  }
console.log(getSecondsToTomorrow());
//8. Форматирование относительной даты
