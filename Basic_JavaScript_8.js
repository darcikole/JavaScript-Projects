var Sentence = "You are a masterpiece in progress";
var Section = Sentence.slice(10,21);
function slice_funct () {
    document.getElementById("slice").innerHTML = Section;
    document.getElementById("slice").innerHTML = Section.toUpperCase();
}

var str = "We go together like wine and any day of the week";
var srch = str.search("wine");
document.getElementById("search").innerHTML = srch;

function precision_method() {
    var W = 66140.12051971;
    document.getElementById("Precision").innerHTML = W.toPrecision(9);
}

function str_funct() {
    var D = 2012;
    document.getElementById("to_string").innerHTML = D.toString();
}

function fixed_method() {
    var M = 25.502365830;
    document.getElementById("Fixed").innerHTML = M.toFixed(2);
}

function value_method() {
    var n = 9756
    document.getElementById("Value").innerHTML =n.valueOf();
}
