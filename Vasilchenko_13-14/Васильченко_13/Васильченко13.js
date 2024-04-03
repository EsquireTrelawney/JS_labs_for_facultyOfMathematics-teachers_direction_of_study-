// случайное целое число от min до max (оба включены)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}

// хотелось бы для быстроты проверки не вручную вводить значения, а иметь возможность
// сгенерировать их случайным образом для ячеек
function rand_amount_for1_2_truck(){
    amount_1_1.value = getRndInteger(0, amount_1.innerText);
    amount_2_1.value = getRndInteger(0, amount_2.innerText);
    amount_3_1.value = getRndInteger(0, amount_3.innerText);
    amount_4_1.value = getRndInteger(0, amount_4.innerText);
    amount_5_1.value = getRndInteger(0, amount_5.innerText);
    amount_6_1.value = getRndInteger(0, amount_6.innerText);

    // понятно, что количество для второго грузовика зависит от количества уже взятого первым
    amount_1_2.value = getRndInteger(0, amount_1.innerText - amount_1_1.value);
    amount_2_2.value = getRndInteger(0, amount_2.innerText - amount_2_1.value);
    amount_3_2.value = getRndInteger(0, amount_3.innerText - amount_3_1.value);
    amount_4_2.value = getRndInteger(0, amount_4.innerText - amount_4_1.value);
    amount_5_2.value = getRndInteger(0, amount_5.innerText - amount_5_1.value);
    amount_6_2.value = getRndInteger(0, amount_6.innerText - amount_6_1.value);
}
function calculate(){


    amount_1_3.innerText = amount_1.innerText - amount_1_1.value - amount_1_2.value;
    amount_2_3.innerText = amount_2.innerText - amount_2_1.value - amount_2_2.value;
    amount_3_3.innerText = amount_3.innerText - amount_3_1.value - amount_3_2.value;
    amount_4_3.innerText = amount_4.innerText - amount_4_1.value - amount_4_2.value;
    amount_5_3.innerText = amount_5.innerText - amount_5_1.value - amount_5_2.value;
    amount_6_3.innerText = amount_6.innerText - amount_6_1.value - amount_6_2.value;

    total_weight_truck1.innerText = amount_1_1.value * weight_1.innerText + amount_2_1.value * weight_2.innerText  +
    + amount_3_1.value * weight_3.innerText + amount_4_1.value * weight_4.innerText + amount_5_1.value * weight_5.innerText +
    + amount_6_1.value * weight_6.innerText;

    total_weight_truck2.innerText = amount_1_2.value * weight_1.innerText + amount_2_2.value * weight_2.innerText  +
    + amount_3_2.value * weight_3.innerText + amount_4_2.value * weight_4.innerText + amount_5_2.value * weight_5.innerText +
    + amount_6_2.value * weight_6.innerText;

    total_weight_truck3.innerText = amount_1_3.innerText * weight_1.innerText + amount_2_3.innerText * weight_2.innerText  +
    + amount_3_3.innerText * weight_3.innerText + amount_4_3.innerText * weight_4.innerText + amount_5_3.innerText * weight_5.innerText +
    + amount_6_3.innerText * weight_6.innerText;
}