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