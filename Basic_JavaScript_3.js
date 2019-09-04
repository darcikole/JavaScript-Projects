var x = addition(26, 44);
document.getElementById("Math1").innerHTML = "26 + 44 =" + x;

function addition(a, b) {
    return a + b;
}

function subtraction_function () {
    var Subtraction = 5-2;
    document.getElementById("Math2").innerHTML = "5-2 = "+ Subtraction;
}

function multiplication () {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function division_function () {
    var division = 25 / 5;
    document.getElementById("Math4").innerHTML = "25/5 = " + division;
}

function multiple_Math () {
    var multi = 9 * 5 + 15 / 6;
    document.getElementById("Math5").innerHTML = "9 times 5, plus 15 divided by 6 equals "+ multi;
}

function modulus_Operator() {
    var remainder = 60 % 8;
    document.getElementById("Math6").innerHTML = "When you divide 60 by 8, you have a remainder of: " + remainder;
}

function negation_Operator() {
    var unary= 25;
    document.getElementById("Math7").innerHTML = -x;
}

var x = 18;
x++;
document.write(x);

var y = 45;
y--;
document.write(y);

window.alert(Math.random() * 250);

document.getElementById("Math8").innerHTML = Math.round(25.32);