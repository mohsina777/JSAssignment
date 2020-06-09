


// Chapter 1 : Task No - 1

//Alerts
alert('Javascript Alert \n \n \n Error! Please enter a valid password.');

// Chapter 1 : Task No - 2
alert('Javascript Alert \n \n \n Welcome to JS Land...\n Happy Codding !');

// Chapter 1 : Task No - 3
alert('Javascript Alert \n \n \n Welcome to JS Land..');
alert('Javascript Alert \n \n \n Happy Codding !');

// Chapter 1 : Task No - 4
alert("Hello ! I can run JS through my web browser's console");
console.log(alert);



// Chapter 2 : Task No - 1
//Variables for Strings


var myname = "Syed Mohsin Ali";

// Chapter 2 : Task No - 2
var username = myname;

// Chapter 2 : Task No - 3
var message = "Hello World !";
alert(message);

// Chapter 2 : Task No - 4
var name = "John Doe";
var age = "15 year old";
var course = "Certified Mobile Application Development";

alert(name);
alert(age);
alert(course);

// Chapter 2 : Task No - 5
var pizza = "PIZZA";
alert(pizza + "\n" + pizza[0] + pizza[1] + pizza[2] + pizza[3] + "\n" + pizza[0] + pizza[1] + pizza[2] + "\n" + pizza[0] + pizza[1] + "\n" + pizza[0]);


// Chapter 2 : Task No - 6

var email = "mohsinnaqvi1003@gmail.com";
alert("My email address is" + email);


// Chapter 2 : Task No - 7
var book = " A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" + book);

//Chapter 2 : Task No - 8
document.write("Chapter 2 : Task No - 8" + "<br>");

document.write("Yeah ! I can write HTML Content through JavaScript" + "<br><br>");


//Chapter 2 : Task No - 9
document.write("Chapter 2 : Task No - 9" + "<br>");

var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);



//VARIABLES FOR NUMBERS
document.write("Chapter 3: Task No - 1 <br>");
//Chapter 3 : Task No - 1
var age = 15;
alert("I am " + age + " year old");


//Chapter 3 : Task No - 2
var N = 14;
alert("You have visited this site " + N + " times")

//Chapter 3 : Task No - 3
var birthYear = 1994;
document.write("My birth years is " + birthYear + "<br>");

document.write("Data type of my decalred variable is " + typeof birthYear + "<br><br>");

//Chapter 3 : Task No - 4
var VisitorName, ProName, Qty;

VisitorName = "John Doe";
ProName = "T-Shirt(s)";
Qty = 5;

document.writeln("<b>" + VisitorName + "</b>" + " ordered " + "<b>" + Qty + " " + ProName + "</b>" + " on XYZ Clothing Store" + "<br><br>");



//VARIABLE NAMES: LEGAL & ILLEGAL
document.write("Chapter 4: Task No - 1 <br>");
//Chapter 4 : Task No - 1
var RP, MRP, SRP;

//Chapter 4 : Task No - 2
var UserName, UserEmail, UserPassword, DOB, DOA;

//Illegal Variables  var 6UserName,&UserEmail,#USerpassword,*DOB,+DOA; 

//Chapter 4 : Task No - 3
document.write("<br><br><br>");
document.write("Rules for Naming JS Variables" + "<br>");
document.write("Variable name can only contain, numbers, $ and _. For Example: $my_1stVariable." + "<br>");
document.write("Variable must begin with a letter, $ or _. For Example : $name, _name or name" + "<br>");
document.write("Variables Name are Case Sensitive" + "<br>");
document.write("Variables Should not be JS Keywords");






//MATH EXPRESSIONS

document.write("<br><br><br>");
document.write("Chapter 5: Task No - 1 <br>");
//Chapter 5 : Task No - 1
var val1 = +prompt("Value 1", "15");
var val2 = +prompt("Value 2", "20");
var total = val1 + val2;

document.write("Sum of " + val1 + " and " + val2 + " is " + total);


document.write("<br>");

//Chapter 5 : Task No - 2
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
//Chapter 5 : Task No - 3
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
//Chapter 5 : Task No - 4
var ticketPrice = 600, ticketqty = 5;
var totalprice = ticketPrice * ticketqty;
document.write("Total cost to buy " + ticketqty + " tickets to a movie is " + totalprice + "PKR");


document.write(" <br> <br> <br>");
//Chapter 5 : Task No - 5
document.write("Table of 4 <br>");
for (var i = 1; i <= 10; i++) {
    document.write("4 x " + i + " = " + 4 * i + "<br>");
}
document.write(" <br> <br> <br>");

//Chapter 5 : Task No - 6
var inpcel = +prompt("Enter Temperature in Celcius", "38");

var outfar = ((inpcel * 9 / 5) + 32);

document.write(inpcel + " C is " + outfar + " F " + "<br>");

var inpfar = +prompt("Please Enter Temperature in Fahrenheit", "103");

var outcel = ((inpfar - 32) * 5 / 9);

document.write(inpfar + " F is " + outcel + " C " + "<br>");


document.write(" <br> <br> <br>");

//Chapter 5 : Task No - 7
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

//Chapter 5 : Task No - 8
var TotalMarks = 980;
var obtainMarks = 804;
var percentage = obtainMarks * 100 / TotalMarks;
document.write("Total marks: " + TotalMarks + "<br>");
document.write("Marks Obtained: " + obtainMarks + "<br>");
document.write("Percentage : " + percentage + "%");

document.write(" <br> <br> <br>");

//Chapter 5 : Task No - 9
var PKRTotal = 10 * 104.80 + 25 * 28;

document.write("Total Currency in PKR: " + PKRTotal);


document.write(" <br> <br> <br>");
//Chapter 5 : Task No - 10
var initVar = 3 + 5 * 10 / 2;
document.write("Result is " + initVar);


document.write(" <br> <br> <br>");

//Chapter 5 : Task No - 11
var CurrYear = 2020;
var BirthYear = 1994;
var UserAge = CurrYear - BirthYear;
document.write("Current Year : " + CurrYear + "<br>");
document.write("Birth Year : " + BirthYear + "<br>");
document.write("Your Age is : " + UserAge);


document.write(" <br> <br> <br>");
//Chapter 5 : Task No - 12
var radius = +prompt("Enter Radius of a Circle", "20");
var circumf = 2 * 3.142 * radius;
var circumarea = 3.142 * (radius * radius);
document.write("<br><br>");
document.write("Radius of a Circle is: " + radius + "<br>");
document.write("Circumference is: " + circumf + "<br>");
document.write("Area is: " + circumarea + "<br>");


document.write(" <br> <br> <br>");
//Chapter 5 : Task No - 13
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
document.write("Chapter 6-9: Task No - 1 <br>");
//Chapter 6-9: Task No - 1

var a = +prompt("Enter Value of Variable a", "10");
document.write("Result" + "<br>");
document.write("The Value of Variable a is: " + a + "<br>");
document.write("-------------------------------------" + "<br><br>");
a = ++a;
document.write("The Value of ++a is: " + a + "<br>");
document.write("Now the Value of ++a is: " + a + "<br><br>");
a = a++;
document.write("The Value of a++ is: " + a + "<br>");
a = a + 1
document.write("Now the Value of a is: " + a + "<br><br>");
a = --a;
document.write("The Value of --a is: " + a + "<br>");
document.write("Now the Value of a is: " + a + "<br><br>");
a = a--;
document.write("The Value of --a is: " + a + "<br>");
a = a - 1;
document.write("Now the Value of a is: " + a + "<br><br>");


document.write(" <br> <br> <br>");

//Chapter 6-9: Task No - 2
var a = 2, b = 1;
document.write("Value of a is: " + a + "<br>");
document.write("Value of b is: " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("Value of --a at first stage is: 1" + "<br>");
document.write("Value of --b at Second stage is: 0" + "<br>");
document.write("Value of --a - --b at Second stage is: 1" + "<br>");
document.write("Value of --a - --b + ++b at Third stage is: 2" + "<br>");
document.write("Value of --a - --b + ++b + b-- at forth stage is: 3" + "<br>");
document.write("Final Result is: " + result);



//Chapter 6-9: Task No - 3
document.write(" <br> <br> <br>");

var userinp = prompt("Enter your Name", "Mike");
alert("Welcome " + userinp);

//Chapter 6-9: Task No - 5
document.write(" <br> <br> <br>");

var numtable = +prompt("Enter Table Number", 5);

for (var i = 1; i <= 10; i++) {
    document.write(numtable + " x " + i + " = " + numtable * i + "<br>");
}


//Chapter 6-9: Task No - 6
document.write(" <br> <br> <br>");


var subject1 = prompt("Enter Subject 1 Name:", "English");
var subject2 = prompt("Enter Subject 2 Name:", "Math");
var subject3 = prompt("Enter Subject 3 Name:", "Urdu");

var subMarks1 = +prompt("Enter Marks of "+subject1 +":", 10);
var subMarks2 = +prompt("Enter Marks of " + subject2 + ":", 20);
var subMarks3 = +prompt("Enter Marks of " + subject3 + ":", 30);

var TotalMarks = 100;
var AllTotal = TotalMarks * 3;

var Marks = subMarks1 + subMarks2 + subMarks3;
var TotalPercentage = (Marks / AllTotal) *100;


document.write("<b> Subject &emsp; Total Marks &emsp; Obtained Marks &emsp; Percentage </b>" + "<br>");

document.write(subject1 + "&emsp;&emsp; " + TotalMarks + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks1 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks1 * 100 / TotalMarks + "%<br>");
document.write(subject2 + "&emsp;&emsp;&emsp;" + TotalMarks + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks2 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks2 * 100 / TotalMarks + "%<br>");
document.write(subject3 + "&emsp;&emsp;&emsp;" + TotalMarks + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks3 + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + subMarks3 * 100 / TotalMarks + "%<br>");
document.write("" + "&emsp;&emsp;&emsp;&emsp;&emsp;" + "<b>" + AllTotal + "</b>" + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + "<b>" + Marks + "</b>" + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" + "<b>" + TotalPercentage + "%" + "</b>");



//Chapter 9-11: Task No - 1
document.write(" <br> <br> <br>");


document.write("Chapter 9-11: Task No - 1 <br>");

var cityName = prompt("Enter City Name", "Karachi");
if (cityName === "Karachi") {
    document.write("Welcome to City of Lights");
}


//Chapter 9-11: Task No - 2
document.write(" <br> <br>");


document.write("Chapter 9-11: Task No - 2 <br>");

var gender = prompt("Enter your Gender", "Male");
if (gender === "Male") 
    document.write("Good Morning Sir.");
else if (gender === "Female")
    document.write("Good Morning Madam.");
else 
    document.write("Invalid Input");


//Chapter 9-11: Task No - 3
document.write(" <br> <br>");


document.write("Chapter 9-11: Task No - 3 <br>");


var light = prompt("Enter Light Color", "Green");

if (light === "Red")
    document.write("Must Stop");
else if (light === "Yellow")
    document.write("Ready to move");
else if (light === "Green")
    document.write("Move Now");





//Chapter 9-11: Task No - 4
document.write(" <br> <br>");
document.write("Chapter 9-11: Task No - 4 <br>");


var fuel = prompt("Enter Fuel", 1);

if (fuel <= 0.25)
    document.write("Please refill the fuel in your car");
else
    document.write("fuel is less tha 1 litre in your car");


//Chapter 9-11: Task No - 5

var a = 4;
if (++a === 5)
{
    alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83)
{
    alert("given condition for variable b is true");

}
var c = 12;
if (c++ === 13)
{
    alert("condition 1 is true");
}
if (c === 13)
{
    alert("condition 2 is true");
}

if (++c < 14)
{
    alert("condition 3 is true");
}

if (c === 14)
{
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost)
{
    alert("The cost equals");

    if (true)
    {
        alert("True");
    }
    if (false)
    {
        alert("False");
    }
}

if ("car" < "cat")
{
    alert("car is smaller than cat");
}



//Chapter 9-11: Task No - 6
document.write(" <br>  <br><br>");
document.write("Chapter 9-11: Task No - 6 <br><br>");


var subject1 = prompt("Enter Subject 1 Name:", "English");
var subject2 = prompt("Enter Subject 2 Name:", "Math");
var subject3 = prompt("Enter Subject 3 Name:", "Urdu");

var subMarks1 = +prompt("Enter Marks of "+subject1 +":", 74);
var subMarks2 = +prompt("Enter Marks of " + subject2 + ":", 66);
var subMarks3 = +prompt("Enter Marks of " + subject3 + ":", 89);

var TotalMarks = 100;
var AllTotal = TotalMarks * 3;

var Marks = subMarks1 + subMarks2 + subMarks3;
var TotalP = (Marks / AllTotal) *100;
var TotalPercentage = Math.round(TotalP);


var grade, remarks;

if (TotalPercentage >= 80)
{
    grade = "A-1";
    remarks = "Excellent";
}
else if (TotalPercentage >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if (TotalPercentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else if (TotalPercentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h3>MARKSHEET</h3>" + "<br>");
document.write("Total Marks : " + AllTotal +"<br>");
document.write("Marks Obtained : " + Marks + "<br>");
document.write("Percentage : " + TotalPercentage + "%<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");





//Chapter 9-11: Task No - 7 Guess Game
document.write(" <br> <br> <br>");
document.write("Chapter 9-11: Task No - 7 <br><br>");

var secretnm = 5;
var userval = +prompt("Enter Number ", 9);

if (userval === secretnm) 
    document.write("Bingo! Correct Answer");
else if (secretnm ===  (userval + 1))
     document.write("Close enough to the correct answer");
 else
    document.write("Good Luck Next Time");



//Chapter 9-11: Task No - 8
document.write(" <br> <br> <br>");
document.write("Chapter 9-11: Task No - 8 <br><br>");


var userInput = +prompt("Enter Number ", 9);
var resultVer = userInput % 3;
if (resultVer ===0)
    document.write("Number is divisible by 3");
else
    document.write("Number is not divisible by 3");



//Chapter 9-11: Task No - 9
document.write(" <br>  <br><br>");
document.write("Chapter 9-11: Task No - 9 <br><br>");

var userInput = +prompt("Enter Number ", 9);
var resultVer = userInput % 2;
if (resultVer === 0)
    document.write("Number is Even");
else
    document.write("Number is ODD");



//Chapter 9-11: Task No - 10
document.write(" <br>  <br><br>");
document.write("Chapter 9-11: Task No - 10 <br><br>");

var TEMP = +prompt("Enter Temprature in Celcius ", 20);

if (TEMP > 40)
    document.write("It is too hot outside");
else if (TEMP > 30)
    document.write("The Weather today is Normal");
else if (TEMP > 20)
    document.write("Today’s Weather is cool");
else if (TEMP > 10)
    document.write("OMG! Today’s weather is so Cool");


//Chapter 9-11: Task No - 10
document.write(" <br>  <br><br>");
document.write("Chapter 9-11: Task No - 11 <br><br>");

var Val1 = +prompt("Enter Value 1", 20);
var Val2 = +prompt("Enter Value 2", 3);
var Operator = prompt("Enter Operation ","+");

var res;
switch(Operator)
{
    case "+":
       res = Val1 + Val2;
        break;
    case "-":
        res = Val1 + Val2;
        break;
    case "/":
        res = Val1 + Val2;
        break;
    case "*":
        res = Val1 + Val2;
        break;
    case "%":
        res = Val1 + Val2;
        break;
}
 

document.write("Result is : "+ res);













