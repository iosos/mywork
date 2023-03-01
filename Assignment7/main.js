// Problem 1

function problem1(){
    var num = document.getElementById('p1').value;
    document.getElementById('p1-result').innerHTML= 'Your number is: ' + num;  
    
}

// Problem 2
function problem2(){
    var num = Number(document.getElementById('p2').value);
    if (num % 3 ==0 && num % 4 == 0 )
    {
        document.getElementById('p2-result').innerHTML= 'Yes';
    }
    else  document.getElementById('p2-result').innerHTML= 'No';
    
}

// Problem 3
function problem3(){
    var num1 = Number(document.getElementById('p3-first').value);
    var num2 = Number(document.getElementById('p3-second').value);

    if (num1 > num2)
    {
        document.getElementById('p3-result').innerHTML= 'The greater number is: ' + num1;
    }
    else if (num2 > num1)
    document.getElementById('p3-result').innerHTML= 'The greater number is: ' + num2;
    else 
    document.getElementById('p3-result').innerHTML= 'Both numbers are equal';

}


// Problem 4
function problem4(){
    var num = Number(document.getElementById('p4').value);

    if (num < 0)
    {
        document.getElementById('p4-result').innerHTML= 'Negative';
    }
    else 
    document.getElementById('p4-result').innerHTML= 'Positive';
}

// Problem 5
function problem5(){
    var num1 = Number(document.getElementById('p5-first').value);
    var num2 = Number(document.getElementById('p5-second').value);
    var num3 = Number(document.getElementById('p5-third').value);

   maxNumber = Math.max (num1, num2,num3);
   minNumber = Math.min (num1,num2,num3);
    document.getElementById('p5-result').innerHTML= 'The max Number is: ' + maxNumber + '</br>And the min number is: ' + minNumber;
}

// Problem 6
function problem6(){
    var num = Number(document.getElementById('p6').value);
    if (num % 2 == 0){
    document.getElementById('p6-result').innerHTML= 'The Number is even';
    } else 
    document.getElementById('p6-result').innerHTML= 'The Number is odd';

}

// Problem 8
function problem8(){
    var letters = document.getElementById('p8').value;
    switch (letters){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById('p8-result').innerHTML= 'vowel';
            break;
        default:
            document.getElementById('p8-result').innerHTML= 'consonant';
    }

}

// Problem 9

function problem9(){
    var num = Number(document.getElementById('p9').value);
    var s='';
    for (var i=1; i<=num ;i++) {
        if (i < num){
            s+= i + ', ';
        } else  s+= i ;
       
    }
    document.getElementById('p9-result').innerHTML= s;
}

// Problem 10

function problem10(){
    var num = Number(document.getElementById('p10').value);
    var s='';
    for (var i=1; i<=12 ;i++) {
       var numCount = i * num;
        s+= numCount + ' ';
       
    }
    document.getElementById('p10-result').innerHTML= s;
}

// Problem 11

function problem11(){
    var num = Number(document.getElementById('p11').value);
    var s='';
    for (var i=1; i<=num ;i++) {
        if (i % 2 == 0){
            s+= i + ' ';
        } 
    }
    document.getElementById('p11-result').innerHTML= s;
}

// Problem 12

function problem12(){
    var num = Number(document.getElementById('p12-num').value);
    var power = Number(document.getElementById('p12-power').value);

    var s = Math.pow(num,power);
    
    document.getElementById('p12-result').innerHTML= s;
}

// Problem 12 repeated

function problem12r(){
    var num1 = Number(document.getElementById('p12r-num1').value);
    var num2 = Number(document.getElementById('p12r-num2').value);
    var num3 = Number(document.getElementById('p12r-num3').value);
    var num4 = Number(document.getElementById('p12r-num4').value);
    var num5 = Number(document.getElementById('p12r-num5').value);

    var total = num1 + num2 + num3 + num4 + num5;
    var avg = (num1 + num2 + num3 + num4 + num5)/5;
    var precentage = 100 * (avg/100)

    document.getElementById('p12r-result').innerHTML= 'Total marks = ' + total + '</br>' + 'Average Marks = ' + avg + '</br>' + 'Percentage = ' + precentage+'%' ;
}

// Problem 13

function problem13(){
    var monthNum = Number(document.getElementById('p13').value);
    var monthDays = '' 
    switch (monthNum){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            monthDays = 31;
            document.getElementById('p13-result').innerHTML= 'Days in Month: ' + monthDays;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            monthDays = 30;
            document.getElementById('p13-result').innerHTML= 'Days in Month: ' + monthDays;
            break;
        case 2:
            monthDays = 28;
            document.getElementById('p13-result').innerHTML= 'Days in Month: ' + monthDays;
            break;
        default:
            document.getElementById('p13-result').innerHTML= 'incorrect month number';

    }
}


// problem 14

function problem14(){
    var num1 = Number(document.getElementById('p14-num1').value);
    var num2 = Number(document.getElementById('p14-num2').value);
    var num3 = Number(document.getElementById('p14-num3').value);
    var num4 = Number(document.getElementById('p14-num4').value);
    var num5 = Number(document.getElementById('p14-num5').value);
    var avgSum = (num1 + num2 + num3 + num4 + num5)/5;
   if (avgSum >= 90) {
         document.getElementById('p14-result').innerHTML= 'Grade  A' ;
   } else if (avgSum >=80) {
    document.getElementById('p14-result').innerHTML= 'Grade  B' ;
   } else if (avgSum >=70) {
    document.getElementById('p14-result').innerHTML= 'Grade  C' ;
   } else if (avgSum >=60) {
    document.getElementById('p14-result').innerHTML= 'Grade  D' ;
   } else if (avgSum >=50) {
    document.getElementById('p14-result').innerHTML= 'Grade  E' ;
   } else if (avgSum <50) {
    document.getElementById('p14-result').innerHTML= 'Grade  F' ;
   }
   else     document.getElementById('p14-result').innerHTML= 'Please enter valid numbers from 0 to 100 ' ;
}

// Problem 15 (refer to problem 13)

// Problem 16
function problem16(){
    var letters = document.getElementById('p16').value;
    switch (letters){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            document.getElementById('p16-result').innerHTML= 'vowel';
            break;
        default:
            document.getElementById('p16-result').innerHTML= 'consonant';
    }

}

// Problem 17
function problem17(){
    var num1 = Number(document.getElementById('p17-first').value);
    var num2 = Number(document.getElementById('p17-second').value);
    maxNum = '';
    switch (true) {
        case (num1>num2):
            maxNum = num1;
            document.getElementById('p17-result').innerHTML= 'The max Number is: ' + maxNum;
            break;
        case (num1<num2):
            maxNum = num2;
            document.getElementById('p17-result').innerHTML= 'The max Number is: ' + maxNum;
            break;
       case (num1 == num2):
        document.getElementById('p17-result').innerHTML= 'Both numbers are equal';
        break;
        default:
            document.getElementById('p17-result').innerHTML= 'Please enter a valid number';
        break;
       
    }
}

// Problem 18
function problem18(){
    var num = Number(document.getElementById('p18').value);
    switch (true) {
        case (num % 2 ==0):
            document.getElementById('p18-result').innerHTML= 'The Number is even';
            break;
            case (num % 2 !==0):
                document.getElementById('p18-result').innerHTML= 'The Number is odd';
            break;
        default:
            document.getElementById('p18-result').innerHTML= 'Please enter a valid number';
            break;
    }
}

// Problem 19
function problem19(){
    var num = Number(document.getElementById('p19').value);
    switch (true) {
        case (num > 0):
            document.getElementById('p19-result').innerHTML= 'The Number is Positive';
            break;
            case (num < 0):
                document.getElementById('p19-result').innerHTML= 'The Number is Negative';
            break;
            case (num == 0):
                document.getElementById('p19-result').innerHTML= 'The Number is 0';
            break;
        default:
            document.getElementById('p19-result').innerHTML= 'Please enter a valid number';
            break;
    }
}

// Problem 20
function problem20(){
    var num1 = Number(document.getElementById('p20-first').value);
    var num2 = Number(document.getElementById('p20-second').value);
    var proc = document.getElementById('p20-proc').value;
    var result = ''
    switch (proc) {
        case '+' :
             result = num1+num2;
            document.getElementById('p20-result').innerHTML= 'Result is '+ result;
                 break;
            case '-':
             result = num1-num2;
            document.getElementById('p20-result').innerHTML= 'Result is '+ result;
                  break;
            case '*':
             result = num1*num2;
                document.getElementById('p20-result').innerHTML= 'Result is '+ result;
                  break;
            case '/':
            case '%':
             result = num1/num2;
            document.getElementById('p20-result').innerHTML= 'Result is '+ result;
       
    }
}