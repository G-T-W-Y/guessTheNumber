let nr = 0;
restart(nr);

function catchesNumber() {
    let message = "";
    let value = document.getElementById("nr").value;
    message = ((value >= nr - 10) && (value <= nr + 10)) ? "Тепло" : "Холодно";
    if (value == nr) { message = "<span class='victory'>Это оно!!!</span>"; }
    document.getElementById("rez1").innerHTML = message;
    document.getElementById("gen").innerHTML = value;
}

function enterNumber() {
    let value = document.getElementById("txt").value;
    let template = /^[0-9]{1,2}$/;
    let message = "";
    if (!(template.test(value))) {
        message = "Введите целое число из одной или двух цифр!"
    } else if (!(value == nr)) {
        message = "Попробуй еще раз!";
    } else {
        message = "Браво! Ты угадал число!"
    }
    document.getElementById("rez2").innerHTML = message;
}

function restart() {
    nr = Math.floor(Math.random(nr) * 78);
    document.getElementById("rez1").innerHTML = "";
    document.getElementById("rez2").innerHTML = "";
    document.getElementById("txt").innerHTML = "";
    document.getElementById("nr").innerHTML = "";
    document.getElementById("gen").innerHTML = "";
}