

// let navMenu = document.getElementById ('nav-menu');

function openNav() {
    if ($("#sidebar").width() == "250") {
        closeNav();
        console.log("00")
    } else {
        $("#sidebar").width("250px");
        $("#main").css("margin-left", "250px");
    }
}

function closeNav() {
    $("#sidebar").width("0px");
    $("#main").css("margin-left", "0px");
}

$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});

function countdown() {
    let now = new Date();
    // console.log(now);
    const eventDate = new Date('2023-04-03');
    // console.log(eventDate);

    /*Solution 2 ==> the month index starts from 0

        const eventDate = new Date(2023, [4-1], 3);
        console.log(eventDate);

    */

    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTiime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
    // console.log(d);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("day").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("day").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hour").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minute").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("second").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}
countdown();


// text area

var max = 100;
$('textarea').keyup(function () {
    let inputLenght = $(this).val().length;
    let character = max - inputLenght;
    if (character <= 0) {
        $('#char').text("You have exeeded the maximun message lenght!")
        $('#rem-char').css('display', 'none')
    }
    else {
        $('#char').text(character)
        $('#rem-char').css('display', 'inline-block')
    }

})