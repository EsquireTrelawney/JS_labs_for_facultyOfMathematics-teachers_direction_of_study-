function swap(action){
    switch(action){
        case "1":
            yes_button.innerHTML = "Нет";
            no_button.innerHTML = "Да";
            break;
        case "2":
            yes_button.innerHTML = "Да";
            no_button.innerHTML = "Нет";
            break;
    }
}

function test(action){
    switch(action){
        case "1":
            if (yes_button.innerHTML === "Нет") {
                wisdom.innerHTML = " Ну если не хочешь, не надо!";
            } else {
                say_wisdom();
            }
            break;
    }
}

function say_wisdom(){
    let wisdoms, message;
    wisdoms = new Array(11);
    wisdoms[0] = "Чем дальше в лес - тем своя рубашка ближе к телу";
    wisdoms[1] = "Не рой другому яму сам";
    wisdoms[2] = "Жизнь трудна. По счастью коротка";
    wisdoms[3] = "Не можешь жить — займись чем-нибудь другим";
    wisdoms[4] ="Нет такой последней черты, за которую бы не ступала нога русского человека";
    wisdoms[5] = "Жизнь нужно прожить так, чтобы не было больно";
    wisdoms[6] = "Если бы комплименты были правдой, то это были бы уже не комплименты, а просто информация";
    wisdoms[7] = "Излил душу вытри за собой";
    wisdoms[8] = "Плохо, когда наступаешь на грабли. Хуже только тогда, когда их ручка лежала в навозе";
    wisdoms[9] = "Шутка должна быть смешной и неожиданной, как удар дубиной в темноте";
    wisdoms[10] = "Лучше курица в супе, чем журавль в небе";
    let d = new Date();
    let i = 0;
    let j = 0;
    // отсчёт секунд идёт с нуля, поэтому добавили единицу, так что цикл будет выполнен секунда+1 раз
    while (j < d.getSeconds()+1){
        message = wisdoms[i];
        i++;
        j++;
        if (i >= wisdoms.length){
            i = 0;
        }
    }
    wisdom.innerHTML = message;
}
