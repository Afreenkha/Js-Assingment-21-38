//CHAPTER 21 - 25
//QUESTION 1

var firstName = prompt("Please Enter Your First Name :");
var lastName = prompt("Please Enter Your Last Name");
var fullName = firstName+ lastName;
alert("Hello " + "" + fullName + "Hope you Doing well");

//QUESTION 2
var leni = prompt("Enter any Sentence");
leni = leni.length;
document.write(leni + "consist of" + leni + "Numbers" );

//QUESTION 3
var st = "Pakistani";
var k = st.indexOf("n");
document.write("Index is " + k  + "<br>");

//QUESTION 4

var st1 = "hello class 7d";
var ca = st1.lastIndexOf("l");
document.write("Lst index of is " + ca + "<br>");

//QUESTION 5

var sy = "Pakistani";
var yt = sy.charAt(3);
document.write("The character at index 3 is" + yt + "<br>");

//QUESTION 6
var rep = "Hyderabad";
var ut = rep.replace("Hyder" , "Islam");
document.write("The sentence was " + rep + "Then after replacement it becomes " + ut + "<br>");

//QUESTION 7
var message = "Ali And Sami are best friends And they play cricket Togather And eat food";
var tfd= message.replace("And" , "&");
document.write("message was : " + message + "<br>" + "And Now its is " + tfd);   

//QUESTION 9
var string = "472";
var checking = typeof(string);
alert("Type of " + checking ,"<br>");
var converting = parseInt(string);
var now = typeof(converting);
alert("Now the type of string is " + now , "<br>");

//QUESTION 10
var pea = "peanut";
var dyu = pea.toUpperCase();
document.write(pea , "<br>");
document.write(dyu , "<br>");


//QUESTION 11
var lang = prompt("Enter your favourite Programming Language: ");
document.write("<br><br>User Input: "+lang);
document.write("<br>Title Case: "+(lang[0].toUpperCase()+lang.slice(1)))

//QUESTION 12

var  num = 35.64;
var convt= num.toString();
var hy = Math.floor(convt);
document.write(num , "<br>") ;
document.write(hy , "<br>");

//QUESTION 13

var use = prompt("Enter your name ");
if(use === '@' || use === '!' || use === '[]' || use == "," || use ==='#' || use ==='*')
{
    alert("Please Enter a valid name that contains special characters ")
}
else{
    alert("Your user name is correct " + use );
}

//QUESTION 14

var bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt("Welcome to sajjad bakery! what do you want to order sir/mam").toLowerCase();

if (bakery.includes(search)){
    document.write("<br><br>"+search+" is available at index "+bakery.indexOf(search)+" in our bakery");
} 
else {
    document.write("<br><br>We are sorry. "+search+" is not available in our bakery");
}


//QUESTION  15
var pas = prompt("Enter Password");
var m = 0;
if (!(pas.length >= 6)) {
    pas = prompt("Password has at least 6 characters\nPlease enter valid password");
}
else if (parseInt(pas[0]) >= 0){
    pas = prompt("Password not contain number in starting\nPlease enter valid password");
}
for (let i = 0; i < pas.length; i++) {
    if (pas[i].charCodeAt() >= 65 && pas[i].charCodeAt() <= 90 && pas[i].charCodeAt() >= 97 && pas[i].charCodeAt() <= 122){
        m = 1 
    } 
}
if (m = 0){
    pas = prompt("Password contains atleast 1 alphabet\nPlease enter valid password");
}

//QUESTION  16
var uni_name ="Sir Syed University";
var arr = uni_name.split('')
arr.forEach(element => {
    document.write("<br>"+element+"<br>"); 
});

//QUESTION  17
var name = prompt("Enter your name : ")
document.write("<br><br>User Input: "+name);
document.write("<br>Last Character of input: "+name[name.length-1]);

//QUESTION 18
var str = "The quick brown fox jumps over the lazy dog".toLowerCase().split(' ');
count = 0;
str.forEach(word => {
    if (word == 'the'){
        count++;
    }
});
document.write("<br><br>There are "+count+" occurrence(s) of word 'the'");

//CHAPTER 26- 30
//QUESTION 1

var num1 = prompt("Enter a Positive Integer");
var flor = Math.floor(num1);
var cel = Math.ceil(num1);
var round = Math.round(num1);
document.write("Number : " + num1 , "<br>");
document.write("Floor Value : " + flor , "<br>" );
document.write("Ceil value : " + cel , "<br>");
document.write("Round Off Value : " + round , "<br>");

//QUESTION 2

var num1 = prompt("Enter a Negitive  Integer");
var flor = Math.floor(num1);
var cel = Math.ceil(num1);
var round = Math.round(num1);
document.write("Number : " + num1 , "<br>");
document.write("Floor Value : " + flor , "<br>" );
document.write("Ceil value : " + cel , "<br>");
document.write("Round Off Value : " + round , "<br>");

//QUESTION 3

var absl = Math.abs(-4);
document.write("Absolute Value is : " , absl ,"<br>");


//QUESTION 4

var num2 = Math.random(4);
document.write("Random value for dice is " + num2 , "<br>");

//QUESTION 6

var bet = Math.random(1,100);
document.write("Random value between 1 - 100 is  " +  bet ,"<br>" );

//QUESTION 7

var weight = prompt("Enter your Weight : " );
var yt = Math.floor(weight);
var ok = Math.ceil(weight);
document.write("Your weight is  : " + yt , "<br>" + ok , "<br>");

//QUESTION 8
 var sec = 4;
 var anss = prompt("Enter your guess for the secret number between 1 - 10 ");
 if (anss === 4){
     alert("Your Guess it awesome , You won it ");
 }
 else {
     alert("Ooopss Sorrry ");
 }

 //CHAPTER 30 -34

 //QUESTION 1
var rightnow = new Date ();
document.write(rightnow , "<br>");

//QUESTION 2

var nop = new Date();
var month = nop.getMonth();
document.write("Current Month :" + month + "June" , "<br>");

//QUESTION 3
var daysName =["Sat" , "Sun" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"]
var days = new Date();
var today = days.getDay();
var final = daysName[today];
document.write(final);

//QUESTION 4
var daysName =["Sat" , "Sun" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday"]
var days = new Date();
var today = days.getDay();
var final = daysName[today];
 if(final === 'Sun')
 {
     alert("ITS FUN DAY YAYYY");
 }

 //QUESTION 5
 var fif = new Date();
 var newwI = fif.getDate();

 if(newwI > 15)
 {
     document.write("First Fifteen days of Months");
 }

 else if(newwI< 15)
 {
     document.write("Last 15 days of the month");
 }

 //QUESTION 6
 var haha = new Date();
 document.write("Current date : " + haha , "<br>");
 var oki = haha.getTime();
document.write("Elapsed Microsecond since january 1 1970 : " + oki , "<br>");
var minutes = oki / (1000*60*60);
document.write("Elspsed Minutes since January 1 1970 : " + minutes , "<br>");

//QUESTION 7
var hrs = new Date().getUTCHours;
var min = new Date().getUTCMinutes;

if (hrs >= 12 && hrs < 24) {
    document.write("<br><br>Its Pm");
}
else {
    document.write("<br><br>Its Am");
}

// QUESTION 8

var prev = new Date("May 30 , 2020 ");
document.write("Later date : " + prev , "<br>");

//QUESTION 9
var ram = new Date ("JUNE 18 , 2015");
document.write(ram + "Days have passed since Ramadan on JUNE 18 2015");

//TASK 10
var refrD = new Date('Dec 5, 2015').getTime();
var preD = new Date().getTime();
var diff = preD - refrD;
document.write("<br><br>On reference Data "+new Date('Dec 5, 2015'))
document.write("<br>"+( Math.floor(diff / (1000*60) ))+" seconds had pass since beginning of 2015" );

//TASK 11
var preD = new Date();
var pasD = new Date();
document.write("<br><br>Current Date: "+preD);
document.write("<br>1 hour ago, it was "+new Date(pasD.setHours(pasD.getHours() + 1)));

//TASK 12
var preD = new Date();
document.write("<br><br>Current Date: "+preD);
document.write("<br>100 years back, it was "+new Date(preD.setYear(preD.getFullYear() - 100)));


//QUESTION 13
var age = prompt("Enter Your Current age to get Your Year" );
document.write("Your Age is : " + age , "<br>");
var cuurenyYear = new Date();
var luy = cuurenyYear.getFullYear();
var calcu = luy-age ;
document.write("Your Birth year is " + calcu , "<br>");

//QUESTION 14
 var customerName = prompt("Enter Your Name please :" );
 var MonthNames= ["jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov", "Dec"];
 var todayDate = new Date();
 var nice = todayDate.getMonth();
 var arr = MonthNames[nice];
 document.write("Customer Name : " + customerName , "<br>");
 document.write(" Month : " + arr , "<br>" );
 var numOfUnits = 410;
 document.write("Number Of Units : " + numOfUnits , "<br>") ;
 var ChargePerUnit = 20;
 document.write("Charge Per Unit :" + ChargePerUnit , "<br>");
 var amount = numOfUnits*ChargePerUnit;
 document.write("Net Amount Payable : " + amount , "<br>");
 var net = 350;
 document.write("Late payment Surcharge " + net , "<br>");
 var afterDate =  amount+net ;
 document.write("Gross Amount payable after due date " + afterDate , "<br>");


 //CHAPTER 35 - 38
 //QUESTION 1

 function tellTime(){
     var func = new Date();
     document.write("Current Date and Time Using Functions :" + func , "<br>");
 }

 tellTime();


 //QUESTION 2
 function greet(){
     var fName = prompt("W=Enter Your First Name :");
     var lName = prompt("Enter your last Name ");
     document. write("Hello Mr/Miss " + fName + "" + lName , "<br>"); 
 }
greet();

//QUESTION 3

function add(){
    var nam1 = prompt("Enter First Number ");
    var nam2 = prompt("Enter Second Number ");
    return nam1+ nam2;

}
add();

//QUESTION 4

function sum (num1 , opr , num2)
{
    if(opr === '+'){
        return num1 + num2;
    }
else if(opr === '-')
{
    return num1 - num2;
}
else if(opr === '*')
{
    return num1*num2;
}
else if (opr === "%")
{
    return num1% num2;
}
else{
    return "Invalid Input"
}
}
var result1 = sum(4,"+",8);
var result2 = sum( 9 , "*" , 4);
var result3 = sum (4 ,"-" , 10);
var result4 =  sum(45 , "%" , 5);
document.write(result1, "<br>");
document.write(result2 , "<br>");
document.write(result3 , "<br>");
document.write(result4 , "<br>");

//QUESTION 5

function square (a)
{
    return a*a;
}
square(5);

//Question 6
//TASK 6
function factorial(n){
    ans = 1
    for (let i = 1; i <= n; i++) {
        ans *= i;
    }
    return ans
}
var num = +prompt("Enter Number : ");
document.write("<br><br>Factorial of "+num+" is "+factorial(num));


//TASK 7
function counting(start, end){
    for (let i = start; i <= end; i++){
        document.write(i+" ");

        if ((i%10) == 0){
            document.write("<br>");
        }
    }
}
counting(+prompt("Enter Start point : "), +prompt("Enter End point : "));

//TASK 8
function square(r){
    return r*r;
}
function Hypo(bse, per){
    return square(square(bse) + square(per));
}
document.write("<br><br>Value of Hypotenuse "+Hypo(+prompt("Enter Base value"), +prompt("Enter Perpendicular value")));

//TASK 9
function areaorec(width, height){
    return width*height;
}
var width = +prompt("Enter width: ");
var height = +prompt("Enter height: ");
alert("Area of rectangle: "+areaorec(width,height));
alert("Area of rectangle: "+areaorec(5,6));

//TASK 10
var text = prompt("Enter any word");
var f = 0;
for (let i = 0; i < text.length; i++) {
    if (!(text[i] == text[text.length - i - 1])){
        alert("'"+text+"' word is not a palindrome");
        break;
    }
    if (i == (text.length-1)){
        alert("'"+text+"' word is palindrome");
    }
}

//TASK 11
var text = prompt("Enter any text : ").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].slice(1);
}
document.write("<br><br>Expected Ouput: "+text.join(' '));

//TASK 12
var text = prompt("Enter any string").split(' ');
document.write("<br><br>Example String: "+text.join(' '));
var ind = 0;
for (let i = 0; i < text.length; i++) {
    if (text[ind].length < text[i].length){
        ind = i;
    }
}
document.write("<br>Expected Output: "+text[ind]);

//TASK 13
function countOcc(string, char){
    c = 0;
    for (let i = 0; i < string.length; i++) {
        if (char == string[i]){
            c++;
        }
    }
    return c;
}
var s = prompt("Enter String");
var ch = prompt("Enter which letter you want to find find");
document.write("<br><br>In string<br>"+s+"<br> has "+countOcc(s, ch)+"occurences of letter "+ch);

//TASK 14
function calcCircumference(r){
    return 2 * 3.14 * r;
}
function calcArea(r){
    return 3.14 * (r * r);
}   
document.write("<br>The circumference is "+calcCircumference(4));
document.write("<br>The Area is "+calcArea(4));
















