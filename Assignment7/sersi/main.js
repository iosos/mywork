// Problem 1

function problem1() {
    var num = document.getElementById('p1').value;
    document.getElementById('p1-result').innerHTML = 'Your number is: ' + num;

}

// Problem 2
function problem2() {
    var num = Number(document.getElementById('p2').value);
    if (num % 3 == 0 && num % 4 == 0) {
        document.getElementById('p2-result').innerHTML = 'Yes';
    } else document.getElementById('p2-result').innerHTML = 'No';

}

// Problem 3
function problem3() {
    var num1 = Number(document.getElementById('p3-first').value);
    var num2 = Number(document.getElementById('p3-second').value);

    if (num1 > num2) {
        document.getElementById('p3-result').innerHTML = 'The greater number is: ' + num1;
    } else if (num2 > num1)
        document.getElementById('p3-result').innerHTML = 'The greater number is: ' + num2;
    else
        document.getElementById('p3-result').innerHTML = 'Both numbers are equal';

}


// Problem 4
function problem4() {
    var num = Number(document.getElementById('p4').value);

    if (num < 0) {
        document.getElementById('p4-result').innerHTML = 'Negative';
    } else
        document.getElementById('p4-result').innerHTML = 'Positive';
}

// Problem 5
function problem5() {
    var num1 = Number(document.getElementById('p5-first').value);
    var num2 = Number(document.getElementById('p5-second').value);
    var num3 = Number(document.getElementById('p5-third').value);

    maxNumber = Math.max(num1, num2, num3);
    minNumber = Math.min(num1, num2, num3);
    document.getElementById('p5-result').innerHTML = 'The max Number is: ' + maxNumber + '</br>And the min number is: ' + minNumber;
}

// Problem 6
function problem6() {
    var num = Number(document.getElementById('p6').value);
    if (num % 2 == 0) {
        document.getElementById('p6-result').innerHTML = 'The Number is even';
    } else
        document.getElementById('p6-result').innerHTML = 'The Number is odd';

}

// Problem 8
function problem8() {
    var letters = document.getElementById('p8').value;
    switch (letters) {
        case 'a':
            document.getElementById('p8-result').innerHTML = 'vowel';
            break;
        case 'e':
            document.getElementById('p8-result').innerHTML = 'vowel';
            break;
        case 'i':
            document.getElementById('p8-result').innerHTML = 'vowel';
            break;
        case 'o':
            document.getElementById('p8-result').innerHTML = 'vowel';
            break;
        case 'u':
            document.getElementById('p8-result').innerHTML = 'vowel';
            break;
        default:
            document.getElementById('p8-result').innerHTML = 'consonant';


    }

}

// Problem 9

function problem9() {
    var num = Number(document.getElementById('p9').value);
    var s = '';
    for (var i = 1; i <= num; i++) {
        if (i < num) {
            s += i + ', ';
        } else s += i;

    }
    document.getElementById('p9-result').innerHTML = s;
}

// Problem 10

function problem10() {
    var num = Number(document.getElementById('p10').value);
    var s = '';
    for (var i = 1; i <= 12; i++) {
        var numCount = i * num;
        s += numCount + ' ';

    }
    document.getElementById('p10-result').innerHTML = s;
}

// Problem 11

function problem11() {
    var num = Number(document.getElementById('p11').value);
    var s = '';
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            s += i + ' ';
        }
    }
    document.getElementById('p11-result').innerHTML = s;
}

// Problem 12

function problem12() {
    var num = Number(document.getElementById('p12-num').value);
    var pow = Number(document.getElementById('p12-power').value);
    var t = 1;
    for (var i = 0; i < pow; i++) {
        t *= num;
    }
    document.getElementById('p12-result').innerHTML = t;
}

// Problem 13

function problem13() {
    var subject1 = Number(document.getElementById('p13-num1').value);
    var subject2 = Number(document.getElementById('p13-num2').value);
    var subject3 = Number(document.getElementById('p13-num3').value);
    var subject4 = Number(document.getElementById('p13-num4').value);
    var subject5 = Number(document.getElementById('p13-num5').value);

    var totalSubject = 500
    var total = subject1 + subject2 + subject3 + subject4 + subject5;
    var avg = total / 5;
    var perc = (total / totalSubject) * 100;
    document.getElementById('p13-result').innerHTML = 'Total marks = ' + total + '<br> Avarage Markes = ' + avg + '<br> Percentage =' + perc;
}

// Problem 14

function problem14() {
    var month = Number(document.getElementById('p14').value);


    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        document.getElementById('p14-result').innerHTML = 'Dayes in month: 31 ';

    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        document.getElementById('p14-result').innerHTML = 'Dayes in month: 30 ';
    } else if (month == 2) {
        document.getElementById('p14-result').innerHTML = 'Dayes in month: 29 ';

    }

}

// Problem 15

function problem15() {
    var physics = Number(document.getElementById('p15-ph').value);
    var chemistry = Number(document.getElementById('p15-ch').value);
    var biology = Number(document.getElementById('p15-bi').value);
    var mathematics = Number(document.getElementById('p15-math').value);
    var computer = Number(document.getElementById('p15-comp').value);

    var totalSubject = 500
    var total = physics + chemistry + biology + mathematics + computer;
    var perc = (total / totalSubject) * 100;
    if (perc >= 90) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad A';
    } else if (perc >= 80) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad B';
    } else if (perc >= 70) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad C';
    } else if (perc >= 60) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad D';
    } else if (perc >= 40) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad E';
    } else if (perc < 40) {
        document.getElementById('p15-result').innerHTML = perc + '% : Grad F';
    }
}

// Problem 16
function problem16() {
    var letters = document.getElementById('p16').value;
    switch (letters) {
        case '1':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '2':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 28';
            break;
        case '3':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '4':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 30';
            break;
        case '5':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '6':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 30';
            break;
        case '7':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '8':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '9':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 30';
            break;
        case '10':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        case '11':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 30';
            break;
        case '12':
            document.getElementById('p16-result').innerHTML = 'Days in Month: 31';
            break;
        default:
            document.getElementById('p16-result').innerHTML = '';


    }

}
/********* */
// Problem 17
function problem17() {
    var letters = document.getElementById('p17').value;
    switch (letters) {
        case 'a':
            document.getElementById('p17-result').innerHTML = 'vowel';
            break;
        case 'e':
            document.getElementById('p17-result').innerHTML = 'vowel';
            break;
        case 'i':
            document.getElementById('p17-result').innerHTML = 'vowel';
            break;
        case 'o':
            document.getElementById('p17-result').innerHTML = 'vowel';
            break;
        case 'u':
            document.getElementById('p17-result').innerHTML = 'vowel';
            break;
        default:
            document.getElementById('p17-result').innerHTML = 'consonant';


    }

}

// Problem 18
function problem18() {
    var num1 = Number(document.getElementById('p18-num1').value);
    var num2 = Number(document.getElementById('p18-num2').value);


    switch (true) {
        case (num1 > num2):
            document.getElementById('p18-result').innerHTML = 'max number: ' + num1;
            break;
        case (num2 > num1):
            document.getElementById('p18-result').innerHTML = 'max number: ' + num2;
            break;
        default:
            document.getElementById('p18-result').innerHTML = '';
    }

}


// Problem 19
function problem19() {
    var num = Number(document.getElementById('p19').value);


    switch (true) {
        case (num % 2 == 0):
            document.getElementById('p19-result').innerHTML = 'even number ';
            break;
        case (num % 2 != 0):
            document.getElementById('p19-result').innerHTML = 'odd number';
            break;
        default:
            document.getElementById('p19-result').innerHTML = '';
    }

}

// Problem 20
function problem20() {
    var num = Number(document.getElementById('p20').value);


    switch (true) {
        case (num == 0):
            document.getElementById('p20-result').innerHTML = 'zero ';
            break;
        case (num > 0):
            document.getElementById('p20-result').innerHTML = 'positive';
            break;
        case (num < 0):
            document.getElementById('p20-result').innerHTML = 'negative';
            break;
        default:
            document.getElementById('p20-result').innerHTML = '';
    }

}

// Problem 21
function problem21() {

    var num1 = Number(document.getElementById('p21-num1').value);
    var num2 = Number(document.getElementById('p21-num2').value);

    var process = document.getElementById('p21-process').value;

    switch (process) {
        case '+':
            var result = num1 + num2;
            document.getElementById('p21-result').innerHTML = 'result: ' + result;
            break;
        case '-':
            var result = num1 - num2;
            document.getElementById('p21-result').innerHTML = 'result: ' + result;
            break;
        case '/':
            var result = num1 / num2;
            document.getElementById('p21-result').innerHTML = 'result: ' + result;
            break;
        case '*':
            var result = num1 * num2;
            document.getElementById('p21-result').innerHTML = 'result: ' + result;
            break;
        default:
            document.getElementById('p21-result').innerHTML = 'error';
    }

}