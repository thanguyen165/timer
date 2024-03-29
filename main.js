var checkDigits = (x) => ((x < 10) ? "0" + x : x);

function setClock(days, hours, minutes, seconds) {
    days = checkDigits(days);
    document.getElementById("clockDays").innerHTML =  days;
    hours = checkDigits(hours);
    document.getElementById("clockHours").innerHTML = hours;
    minutes = checkDigits(minutes);
    document.getElementById("clockMinutes").innerHTML = minutes;
    seconds = checkDigits(seconds);
    document.getElementById("clockSeconds").innerHTML = seconds;
}

// Time calculations for days, hours, minutes and seconds
function caculate(time) {
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
        
    // Output the result to HTML
    setClock(days, hours, minutes, seconds);
}

// Set the date we're counting down to
var targetDate = "March 26, 2023 12:00:00"
var countDownDate = new Date(targetDate).getTime();
document.getElementById("targetDate").innerHTML = targetDate;

// Update the count down every 1 second
var x = setInterval(function() {
        // Get today's date and time, by miliseconds
        var now = new Date().getTime();

        // Find the distance between now and the count down date, by miliseconds
        var distance = countDownDate - now;
        // Change it to days, hours, minutes and seconds
        caculate(distance);
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countDownBlock").innerHTML = "EXPIRED";
        }
}, 1000);
