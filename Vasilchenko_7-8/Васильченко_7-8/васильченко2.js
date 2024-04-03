function C2F()

{

grad=prompt("Введите градусы Цельсия","Введите сюда градусы по шкале Цельсия");
itog.innerText=grad+" градусов по шкале Цельсия равно "+(1.8*grad+32)+" градусов по шкале Фаренгейта";


}

function C3F()

{

grad=prompt("Введите градусы Фаренгейта","Введите сюда градусы по шкале Фаренгейта");
itog.innerText=grad+" градусов по шкале Фаренгейта равно "+(grad-32)/1.8+" градусов по шкале Цельсия";

}
function zoom()
{
ris1.height="900";
}
function zoom1()
{
ris1.height="500";
}
function zoom2()
{
ris1.src="https://img.7dach.ru/image/1200/17/79/12/2019/01/24/175503.jpg";
}

function picture(num)
{
ris1.src="ex"+num+".jpg"
}
function picture1(num)
{
ris2.src="ex"+num+".jpg"
}
function test()
{
if(sekr.value=="0531")
{window.location="https://u-florista.ru/mnogoletniki/mnogoletnie-tsvety-s-sirenevymi-i-fioletovymi-tsvetami.html"}
}
function plus()
{
rez.value=op1.value-(-1)*op2.value;
}
function minus()
{
rez.value=op1.value-op2.value;
}
function umn()
{
rez.value=op1.value*op2.value;
}
function razd()
{
rez.value=op1.value/op2.value;
}
function proc()
{
rez.value=op1.value/100*op2.value;
}
function doll()
{
rez.value=op1.value*(63,78);
}

function formatTime(hour, minutes, seconds)
{
    //возвращает время в формате ЧЧ:ММ:СС получая на вход Число часов, минус, секунд.
    // 1 ночи, 7 минут -> 01:07. Т.е. добавились привычные нули, если 
    // час или минута <10. 

    if (hour < 10){
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
    month = new Array("января", "февраля", "марта", "апреля",
    "мая", "июня", "июля", "августа", "сентября", "октября",
    "ноября", "декабря")
    //  Нужно обратить внимание, что в отличие от месяцов, где январь - нулевой месяц, а 11ый- декабрь
    // Дни недели в JS начинают свой счёт по какой-то причине с воскресенья. Т.е. это и есть нулевой день
    // понедельник - 1ый и т.д. Тогда и в массиве элементы будут начинаться с "воскресенье", который по счёту нулевой.
    day_of_week = new Array("воскресенье", "понедельник", "вторник", "среда", 
    "четверг", "пятница", "суббота") 

    var start_of_lesson = new Array(8*60+00, 9*60+40, 11*60+20, 13*60+00, 14*60+40, 16*60+10, 17*60+40, 
        3*60+00, 4*60+20); // здесь последние два элемента массива нужны для тестирования. Вместо этих двух
        // для проверки работы программы можно ввести начало каких-нибудь двух ближайших пар (относительно 
        // настоящего времени) в минутах
    var end_of_lesson = new Array(9*60+20, 11*60+00, 12*60+40, 14*60+20, 16*60+00, 17*60+30, 19*60+00, 
        3*60+40, 5*60+00); // а здесь соответственно конец каких-то двух пар. Программа проверялась ночью, 
        // поэтому такое начало и конец пар.

    d=new Date();

    time_in_minutes = d.getHours()*60 + d.getMinutes();
// эти опции нужны для будущего вывода часов и минут в привычном формате ЧЧ:ММ
var options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

vrema.innerText ="Сегодня - " + day_of_week[d.getDay()] + ", "+ d.getDate()+"-е "+
month[(d.getMonth())]+ " "+d.getFullYear()+"-го года, сейчас  "+ 
// строка ниже, это проверенный и распространённый способ получить только время из даты
// с помощью локализации.
d.toLocaleString("ru", options) + "\n Вывод \"красивого\" времени самописным способом: " + 
// а это способ с помощью собственно-написанной функции
formatTime(d.getHours(), d.getMinutes(), d.getSeconds());


for (num_of_lesson=0; num_of_lesson < 8; num_of_lesson++){
    if (time_in_minutes > start_of_lesson[num_of_lesson] && time_in_minutes < end_of_lesson[num_of_lesson]){
        until_the_end = end_of_lesson[num_of_lesson] - time_in_minutes;
        vrema2.innerText = "До конца " + (num_of_lesson+1) + "-ой пары осталось " + until_the_end + " минут.";
        // к переменной цикла прибавляется единица при вычислении номера урока, потому что у массива в JS 
        // нумерация элементов идёт с нуля. У нас первый элемент ( начало первой пары ) имеет номер 0. 
        // Например понимая, что текущее время в минутах больше значения первого элемента массива с началом пар, 
        // но меньше первого элемента массива с концами пар, мы понимаем, что сейчас первая пара. Чтобы её номер 
        // вывести корректно, мы и прибавляем 1 к номеру элемента этих массивов.
    } else {
    if (num_of_lesson != 6){
        if (time_in_minutes > end_of_lesson[num_of_lesson] && time_in_minutes < start_of_lesson[num_of_lesson+1]){
            to_next_lesson = start_of_lesson[num_of_lesson+1] - time_in_minutes;
            vrema2.innerText = "Сейчас перемена. До начала " + (num_of_lesson+1) + " пары: " + to_next_lesson + " минут.";
        }
    } else {
        to_first_lesson = Math.abs(time_in_minutes - 480)
        vrema2.innerText = "Пары кончились!!11 До начала ближайшей пары " + to_first_lesson + " минут";
    }
}
}
}