function str_funct() {
    var str = "Listen.  Before I had my coffee I didn't know how awesome I was going to be today either."
    var n = str.length;
    document.getElementById("step175").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
   for (Y = 0; Y < Instruments.length; Y++) {
       Content += Instruments[Y] + "<br>";
   } 
   document.getElementById("List_of_Instruments").innerHTML = Content;
}

var Red_Var = ["Cabernet Sauvignon", "Red Blends", "Pinot Noir", "Merlot", "Syrah", "Borolo", "Bordeaux", "Tempranillo", "Malbec", "Zinfandel"]; //The Array//
var List = ""; //The string //
var R; // The index //
function array_Function() {
    for (R = 0; R < Red_Var.length; R++)  { //Index = 0, 0 < array length, index + 1 //
        List += Red_Var[R] + "<br>"; // add array item to string with a break//
    }
    document.getElementById("Array").innerHTML = List; // display string //
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black", year:"1978"};
    Musical_Instrument.type = "bass"
    Musical_Instrument.brand = "Univox"
    Musical_Instrument.price = "$600";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.year + " " +Musical_Instrument.brand + " " +Musical_Instrument.type + " is " + Musical_Instrument.price;
}

var D = 44;
document.write(D);
    {
        let D = 34;
        document.write ("<br>" + D);
    }
document.write("<br>" + D);


var rtn = return_funct(5, 9);
function return_funct(c, d) {
    return c * d;
}
document.getElementById("rtn_stmnt").innerHTML = rtn;



let wine = {
    vintage: "2016",
    varietal: "Riesling",
    country: "Austria",
    region: "Kremstal",
    producer: "Winzer Krems",
    descripton: function() {
        return wine.producer  + " " + wine.varietal + " " + wine.region + " " +wine.country + " " + wine.vintage + "<br>";
    }
};
document.getElementById("wine_list").innerHTML = wine.descripton();

var text = ""; //string
var g; //index

for (g = 0; g < 20; g++) {
    if (g === 7) {break;}
    text += g + "<br>";
}
document.getElementById("breakn").innerHTML = text;

for (g = 0; g <= 20; g++) {
    if (g === 13) {continue;}
    text += g + "<br>";
}
document.getElementById("continue").innerHTML = text;