var x = 25;

function multiplyNums() {
    document.write(5 * x + "<br>" );
}
 multiplyNums();

 function divideNums() {
     var y = 100;
     document.write(y / 5 + "<br>");
 }

 divideNums();

 console.log(y/x);

 function checkTime() {
     if (new Date().getHours() < 12) {
         document.getElementById("greeting").innerHTML = "Good Morning!";
     }
    else if (new Date().getHours() > 12 && (new Date().getHours()< 18)) {
        document.getElementById("greeting").innerHTML = "Good Afternoon!";
    }
    else  {
        document.getElementById("greeting").innerHTML = "Good Evening!";
    }
 }

function check_num() {
    var Choose = document.getElementById("Choose").value;
   
    if (Choose == 7)  {
        document.getElementById("Enter").innerHTML = "7 is correct!  You win!"
        }   
    else {
        document.getElementById("Enter").innerHTML = "Sorry, that is not correct.  Try again!"
    }
}

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0 ) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document. getElementById("Time_of_day").innerHTML = Reply;
}
