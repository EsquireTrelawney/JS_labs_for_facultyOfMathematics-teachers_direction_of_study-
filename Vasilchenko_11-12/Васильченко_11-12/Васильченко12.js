
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
slideshow_place.src="pc.jpg";
}
num_of_picture = 0;
// время в миллисекундах для переключения слайдов
period = 3000; 

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

    pictures = new Array("videocard1.jpg", "videocard2.jpg", "videocard3.png", 
    "videocard4.jpg", "videocard5.jpg", "videocard6.jpg", "videocard7.jpg", 
    "videocard8.jpg", "videocard9.jpg");

    setTimeout("slide()", period)
    slideshow_place.src = pictures[num_of_picture];
    num_of_picture ++;
    if (num_of_picture >= pictures.length) num_of_picture = 0;
}

function count1(){
    total.value = 0;

    if (product1.checked){
        total.value = Number(total.value)+Number(product1.value);
    }
    if (product2.checked){
        total.value = Number(total.value)+Number(product2.value);
    }
    if (product3.checked){
        total.value = Number(total.value)+Number(product3.value);
    }
    if (product4.checked){
        total.value = Number(total.value)+Number(product4.value);
    }
    if (product5.checked){
        total.value = Number(total.value)+Number(product5.value);
    }
    if (product6.checked){
        total.value = Number(total.value)+Number(product6.value);
    }
    if (product7.checked){
        total.value = Number(total.value)+Number(product7.value);
    }
    if (product8.checked){
        total.value = Number(total.value)+Number(product8.value);
    }
    if (product9.checked){
        total.value = Number(total.value)+Number(product9.value);
    }
    if (product10.checked){
        total.value = Number(total.value)+Number(product10.value);
    }

    total.value = (Math.floor(Number(total.value) / 1000)).toString() + "." + ((total.value) % 1000 + 1000).toString() + " руб.";
}