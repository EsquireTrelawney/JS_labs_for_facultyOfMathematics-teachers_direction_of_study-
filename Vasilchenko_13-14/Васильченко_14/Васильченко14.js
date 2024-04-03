function formatTime(hour, minutes, seconds)
{
    //Возвращает время в формате ЧЧ:ММ:СС получая на вход Число часов, минус, секунд.
    // 1 ночи, 7 минут -> 01:07. Т.е. добавились привычные нули, если
    // час или минута <10.

    let format_hour, format_minutes, format_seconds;
    if (hour < 10) {
        format_hour = "0" + hour.toString();
    } else {
        format_hour = "" + hour.toString();
    }
    if (minutes < 10){
        format_minutes = "0" + minutes.toString();
    } else {
        format_minutes = "" + minutes.toString();
    }
    if (seconds < 10){
        format_seconds = "0" + seconds.toString();
    } else {
        format_seconds = "" + seconds.toString();
    }

    return format_hour + ":" + format_minutes + ":" + format_seconds;
}
function time()
{
    let options;
    let month = ["января", "февраля", "марта", "апреля",
        "мая", "июня", "июля", "августа", "сентября", "октября",
        "ноября", "декабря"]
    //  Нужно обратить внимание, что в отличие от месяцев, где январь - нулевой месяц, а 11ый - декабрь
    // Дни недели в JS начинают свой счёт по какой-то причине с воскресенья. Т.е. это и есть нулевой день
    // понедельник - 1ый и т.д. Тогда и в массиве элементы будут начинаться с "воскресенье", который по счёту нулевой.
    let day_of_week = ["воскресенье", "понедельник", "вторник", "среда",
        "четверг", "пятница", "суббота"]

    const start_of_lesson = [8 * 60, 9 * 60 + 40, 11 * 60 + 20, 13 * 60, 14 * 60 + 40, 16 * 60 + 10, 17 * 60 + 40,
        3 * 60, 4 * 60 + 20]; // Здесь последние два элемента массива нужны для тестирования. Вместо этих двух
    // для проверки работы программы можно ввести начало каких-нибудь двух ближайших пар (относительно
    // настоящего времени) в минутах
    const end_of_lesson = [9 * 60 + 20, 11 * 60, 12 * 60 + 40, 14 * 60 + 20, 16 * 60, 17 * 60 + 30, 19 * 60,
        3 * 60 + 40, 5 * 60]; // А здесь соответственно конец каких-то двух пар. Программа проверялась ночью,
    // поэтому такое начало и конец пар.

    let d = new Date();

    let time_in_minutes = d.getHours() * 60 + d.getMinutes();
// эти опции нужны для будущего вывода часов и минут в привычном формате ЧЧ:ММ
    options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

today_is.innerText ="Сегодня - " + day_of_week[d.getDay()] + ", "+ d.getDate()+"-е "+
month[(d.getMonth())]+ " "+d.getFullYear()+"-го года, сейчас  "+
// строка ниже, это проверенный и распространённый способ получить только время из даты
// с помощью локализации.
d.toLocaleString("ru", options) + "\n Вывод \"красивого\" времени своим способом: " +
// а это способ с помощью собственно-написанной функции
formatTime(d.getHours(), d.getMinutes(), d.getSeconds());


    let until_the_end, to_next_lesson, to_first_lesson;
    for (let num_of_lesson = 0; num_of_lesson < 8; num_of_lesson++) {
        if (time_in_minutes > start_of_lesson[num_of_lesson] && time_in_minutes < end_of_lesson[num_of_lesson]) {
            until_the_end = end_of_lesson[num_of_lesson] - time_in_minutes;
            time_last.innerText = "До конца " + (num_of_lesson + 1) + "-ой пары осталось " + until_the_end + " минут.";
            // К переменной цикла прибавляется единица при вычислении номера урока, потому что у массива в JS
            // нумерация элементов идёт с нуля. У нас первый элемент (начало первой пары) имеет номер 0.
            // Например, понимая, что текущее время в минутах больше значения первого элемента массива с началом пар,
            // но меньше первого элемента массива с концами пар, мы понимаем, что сейчас первая пара. Чтобы её номер
            // вывести корректно, мы и прибавляем 1 к номеру элемента этих массивов.
        } else {
            if (num_of_lesson !== 6) {
                if (time_in_minutes > end_of_lesson[num_of_lesson] && time_in_minutes < start_of_lesson[num_of_lesson + 1]) {
                    to_next_lesson = start_of_lesson[num_of_lesson + 1] - time_in_minutes;
                    time_last.innerText = "Сейчас перемена. До начала " + (num_of_lesson + 1) + " пары: " + to_next_lesson + " минут.";
                }
            } else {
                to_first_lesson = Math.abs(time_in_minutes - 480)
                time_last.innerText = "Пары кончились!!11 До начала ближайшей пары " + to_first_lesson + " минут";
            }
        }
    }

    // вызов функции для памятной даты
    significant_date();
}

function significant_date() {
    // памятные даты, построенные по формату день месяца * 100 + номер месяца
    let dates = [2003, 2303, 2603, 2703];
    // массив для соответствующих описаний памятных дат
    let messages = ["День французского языка в ООН!", "В 1876 году Павел Яблочков запатентовал электрическую лампочку!",
    "В 1872 году в России выпущена первая почтовая карточка!", "Всемирный день театра!"];

    let today = new Date();

    for (let element in dates){
        if (dates[element] === today.getDate()*100 + today.getMonth()+1){
            // Единичка в строчке выше добавляется, так как по умолчанию нумерация месяцев в JS идёт с нуля
            // (т.е. январь - нулевой месяц)
            significant_date_element.innerText = "Сегодня: \n" + messages[element];
        } else {
            significant_date_element.innerText= "Ничего необычного сегодня не произошло :(";
        }
    }
}