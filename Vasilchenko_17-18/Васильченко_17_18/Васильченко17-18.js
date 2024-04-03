let k = 0;

function change_color(){
    let some_color = ["red", "green", "blue", "purple", "gold", "orange", "navy", "maroon"];
    some_caption.style.color = some_color[k]; k++;
    if (k===some_color.length) {
        k = 0;
    }
    setTimeout("change_color('on')", 500);
}
