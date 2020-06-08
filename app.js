//Alerts
alert('Javascript Alert \n \n \n Error! Please enter a valid password.');
alert('Javascript Alert \n \n \n Welcome to JS Land...\n Happy Codding !');
alert('Javascript Alert \n \n \n Welcome to JS Land..');
alert('Javascript Alert \n \n \n Happy Codding !');
alert("Hello ! I can run JS through my web browser's console");
console.log(alert);



//Variables for Strings

var username;
var myname = "Syed Mohsin Ali";
username = myname;


var message = "Hello World !";
alert(message);

var name = "John Doe";
var age = "15 year old";
var course = "Certified Mobile Application Development";

alert(name);
alert(age);
alert(course);

var pizza = "PIZZA";
alert(pizza + "\n" + pizza[0] + pizza[1] + pizza[2] + pizza[3] + "\n" + pizza[0] + pizza[1] + pizza[2] + "\n" + pizza[0] + pizza[1] + "\n" + pizza[0]);


var email = "mohsinnaqvi1003@gmail.com";
alert("My email address is" + email);

var book = " A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + book);


document.write("Yeah ! I can write HTML Content through JavaScript" + "<br><br>");

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);



//VARIABLES FOR NUMBERS


var age = 15;
alert("I am " + age + " year old");

var N = 14;
alert("You have visited this site " + N + " times")

var birthYear = 1994;
document.write("My birth years is " + birthYear + "<br>");

document.write("Data type of my decalred variable is " + typeof birthYear + "<br><br>");

var VisitorName, ProName, Qty;

VisitorName = "John Doe";
ProName = "T-Shirt(s)";
Qty = 5;

document.writeln("<b>" + VisitorName + "</b>" + " ordered " + "<b>" + Qty + " " + ProName + "</b>" + " on XYZ Clothing Store" + "<br><br>");



//VARIABLE NAMES: LEGAL & ILLEGAL

var RP, MRP, SRP;

var UserName, UserEmail, UserPassword, DOB, DOA;

//Illegal Variables  var 6UserName,&UserEmail,#USerpassword,*DOB,+DOA; 


document.write("<br><br><br>");
document.write("Rules for Naming JS Variables" + "<br>");
document.write("Variable name can only contain, numbers, $ and _. For Example: $my_1stVariable." + "<br>");
document.write("Variable must begin with a letter, $ or _. For Example : $name, _name or name" + "<br>");
document.write("Variables Name are Case Sensitive" + "<br>");
document.write("Variables Should not be JS Keywords");






//MATH EXPRESSIONS

document.write("<br><br><br>");


var val1 = +prompt("Value 1", "15");
var val2 = +prompt("Value 2", "20");
var total = val1 + val2;

document.write("Sum of " + val1 + " and " + val2 + " is " + total);


document.write("<br>");


var val1 = +prompt("Value 1", "20");
var val2 = +prompt("Value 2", "5");
var total = val1 - val2;

document.write("Subtraction of " + val1 + " and " + val2 + " is " + total);


document.write("<br>");


var val1 = +prompt("Value 1", "20");
var val2 = +prompt("Value 2", "5");
var total = val1 * val2;

document.write("Multiplication of " + val1 + " and " + val2 + " is " + total);

document.write("<br>");


var val1 = +prompt("Value 1", "20");
var val2 = +prompt("Value 2", "5");
var total = val1 / val2;

document.write("Division of " + val1 + " and " + val2 + " is " + total);

document.write("<br>");


var val1 = +prompt("Value 1", "20");
var val2 = +prompt("Value 2", "5");
var total = val1 % val2;

document.write("Modulus of " + val1 + " and " + val2 + " is " + total);


document.write("<br><br> <br>");
var initnumber;
document.write("value after variable declration is: " + initnumber + "<br>");
initnumber = 15;
document.write("initial value: " + initnumber + "<br>");
initnumber++;
document.write("value after increment is: " + initnumber + "<br>");
initnumber = initnumber + 7;
document.write("value after addition is: " + initnumber + "<br>");
initnumber--;
document.write("value after decrement is: " + initnumber + "<br>");
initnumber = initnumber % 3;
document.write("The reminder is: " + initnumber);


document.write("<br><br> <br>");

var ticketPrice = 600, ticketqty = 5;
var totalprice = ticketPrice * ticketqty;
document.write("Total cost to buy " + ticketqty + " tickets to a movie is " + totalprice + "PKR");


document.write(" <br> <br> <br>");
document.write("Table of 4 <br>");
for (var i = 1; i <= 10; i++) {
    document.write("4 x " + i + " = " + 4 * i + "<br>");
}
document.write(" <br> <br> <br>");


var inpcel = +prompt("Enter Temperature in Celcius", "38");

var outfar = ((inpcel * 9 / 5) + 32);

document.write(inpcel + " C is " + outfar + " F " + "<br>");

var inpfar = +prompt("Please Enter Temperature in Fahrenheit", "103");

var outcel = ((inpfar - 32) * 5 / 9);

document.write(inpfar + " F is " + outcel + " C " + "<br>");


document.write(" <br> <br> <br>");


var itemPrice1 = 650;
var item1Qty = 3;

var item1 = itemPrice1 * item1Qty;

var itemPrice2 = 100;
var item2Qty = 7;
var item2 = itemPrice2 * item2Qty;

var deliverycharges = 100;

var total = item1 + item2 + deliverycharges;

document.write("Price of item 1 is " + itemPrice1 + "<br>" + "Quantity of item 1 is  " + item1Qty + "<br>");

document.write("Price of item 2 is " + itemPrice2 + "<br>" + "Quantity of item 2 is  " + item2Qty + "<br>");

document.write("Total cost of your order is " + total);

document.write(" <br> <br> <br>");


var TotalMarks = 980;
var obtainMarks = 804;
var percentage = obtainMarks * 100 / TotalMarks;
document.write("Total marks: " + TotalMarks + "<br>");
document.write("Marks Obtained: " + obtainMarks + "<br>");
document.write("Percentage : " + percentage + "%");

document.write(" <br> <br> <br>");


var PKRTotal = 10 * 104.80 + 25 * 28;

document.write("Total Currency in PKR: " + PKRTotal);


document.write(" <br> <br> <br>");

var initVar = 3 + 5 * 10 / 2;
document.write("Result is " + initVar);


document.write(" <br> <br> <br>");


var CurrYear = 2020;
var BirthYear = 1994;
var UserAge = CurrYear - BirthYear;
document.write("Current Year : " + CurrYear + "<br>");
document.write("Birth Year : " + BirthYear + "<br>");
document.write("Your Age is : " + UserAge);


document.write(" <br> <br> <br>");

var radius = +prompt("Enter Radius of a Circle", "20");
var circumf = 2 * 3.142 * radius;
var circumarea = 3.142 * (radius * radius);
document.write("<br><br>");
document.write("Radius of a Circle is: " + radius + "<br>");
document.write("Circumference is: " + circumf + "<br>");
document.write("Area is: " + circumarea + "<br>");


document.write(" <br> <br> <br>");

var favSnack = prompt("Enter your Favourite Snack", "Lays")
var currentAge = +prompt("Enter Your Current Age", "26")
var maxAge = +prompt("Enter your Maximum Age", "70")
var estPerday = +prompt("Enter Estimated Amount per Day Consumed", "5")
var totalReq = (((maxAge - currentAge) * 365) * estPerday)
document.write("The Lifetime Supply Calculator" + "<br><br>")
document.write("Favourite Snack : " + favSnack + "<br>")
document.write("Current Age : " + currentAge + "<br>")
document.write("Estimated Maximum Age : " + maxAge + "<br>")
document.write("Amount of Snacks Per Day : " + estPerday + "<br>")
document.write("You Will need " + totalReq + " " + favSnack + " to last you until the ripe old age of " + maxAge)


document.write(" <br> <br> <br>");



var a = +prompt("Enter Value of Variable a", "10")
document.write("Result" + "<br>")
document.write("The Value of Variable a is: " + a + "<br>")
document.write("-------------------------------------" + "<br><br>")
a = ++a
document.write("The Value of ++a is: " + a + "<br>")
document.write("Now the Value of ++a is: " + a + "<br><br>")
a = a++
document.write("The Value of a++ is: " + a + "<br>")
a = a + 1
document.write("Now the Value of a is: " + a + "<br><br>")
a = --a
document.write("The Value of --a is: " + a + "<br>")
document.write("Now the Value of a is: " + a + "<br><br>")
a = a--
document.write("The Value of --a is: " + a + "<br>")
a = a - 1
document.write("Now the Value of a is: " + a + "<br><br>")


document.write(" <br> <br> <br>");


var a = 2, b = 1;
document.write("Value of a is: " + a + "<br>")
document.write("Value of b is: " + b + "<br>")
var result = --a - --b + ++b + b--
document.write("Value of --a at first stage is: 1" + "<br>")
document.write("Value of --b at Second stage is: 0" + "<br>")
document.write("Value of --a - --b at Second stage is: 1" + "<br>")
document.write("Value of --a - --b + ++b at Third stage is: 2" + "<br>")
document.write("Value of --a - --b + ++b + b-- at forth stage is: 3" + "<br>")
document.write("Final Result is: " + result)
