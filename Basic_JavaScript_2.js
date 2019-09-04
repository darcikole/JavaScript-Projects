function step60() {
   document.getElementById("learning").innerHTML = "He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying. - Friedrich Nietzsche";
}

function step63() {
    var sentence = "I am learning a new operator";
    sentence += " and I hope to learn more and more!";
    document.getElementById("Concantenate").innerHTML = sentence;
}

var x = step67(750, .033814);
document.getElementById("divide").innerHTML = x;

function step67(a, b) {
    return a / b;
}

