
function zoom()
{
slideshow_place.height="900";
}
function zoom1()
{
slideshow_place.height="500";
}
function zoom2()
{
slideshow_place.src="https://img.7dach.ru/image/1200/17/79/12/2019/01/24/175503.jpg";
}
num_of_picture = 0;
// время в миллисекундах для переключения слайдов
period = 1000; 

function slideshow_set_faster(){
    if (period <= 500){
        period = 400;
    } 
    else {
        period = period - 500;
    }
}

function slideshow_set_slower(){
    if (period >= 10000){
        period = 10000;
    } else {
        period = period + 500;
    }
}

function slideshow_speed(time_ms){
    period = time_ms;
}

function slide(){
    pictures = new Array("mountain1.jpg", "mountain2.jpg", "mountain3.jpg", 
    "mountain4.jpg", "mountain5.jpg", "mountain6.jpg", "mountain7.jpg");
    setTimeout("slide()", period)
    slideshow_place.src = pictures[num_of_picture];
    num_of_picture ++;
    if (num_of_picture >= pictures.length) num_of_picture = 0;
}