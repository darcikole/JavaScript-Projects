function my_Dictionary () {
    var Animal = {
        Species: "Dog",
        Color: "Black and Brown",
        Breed: "Daschund",
        Age: 3,
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}