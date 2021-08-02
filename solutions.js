var myVar = 5;
console.log('myVar', myVar);    //myVar : 5
myVar = 'Changed to a string';
console.log('myVar', myVar);    //myVar : Changed to a string


var x = 12;
var y = 5;

var z = x + y;
console.log('x+y', z);  //17

var z = x - y;
console.log('x-y', z);  //7

var z = x * y;
console.log('x*y', z);  //60

var z = x / y;
console.log('x/y', z);  //2.4

var z = parseInt(x/y);
console.log('parseInt(x/y)', z);    //2

var z = x % y;
console.log('x%y', z);  //2

var z = x**2;
console.log('x**2 Math.pow(x,2);', z);  //144

var z = x++;
console.log('x++', z);  //12

var z = ++x;
console.log('++x', z);  //14

var z = x--;
console.log('x--', z);  //14

var z = --x;
console.log('--x', z);  //12


var str1 = 'String one';
console.log('str1', str1);  //String one
var str2 = str1 + ', string two';
console.log('str2', str2);  //String one, string two
var numb = 100;
str2 = str1 + ', ' + numb;
console.log('str2', str2);  //String one, 100

console.log('str2.length', str2.length);

var str3 = "I'm a string without an escape character";
console.log('str3', str3);
var str4 = '"Also a string without an escape character"';
console.log('str4', str4);
var str5 = 'I\'m a string with an escape character (\')';
console.log('str5', str5);
var str6 = "I\"m a string with an escape character (\")";
console.log('str6', str6);


var firstName = "John";
var lastName = "Doe";
var str7 = `Hello ${firstName} ${lastName}`;
console.log('str7', str7);  //Hello John Doe


var string = `I'm a string, Hello World`;

var slice = string.slice(6);    //(starting_pos) => goes to the end of the string
console.log('slice', slice);  //string, Hello World
slice = string.slice(4, 12);    //(starting_pos, ending_pos) => goes to ending_pos
console.log('slice', slice);  //a string
slice = string.slice(-11, -6);    //(starting_pos, ending_pos) => goes to ending_pos
console.log('slice', slice);  //Hello

//just like slice, but it can't accept negative indexes
var substring = string.substring(6);    //(starting_pos) => goes to the end of the string
console.log('substring', substring);  //string, Hello World
substring = string.substring(4, 12);    //(starting_pos, ending_pos) => goes to ending_pos
console.log('substring', substring);  //a string

var substr = string.substr(6);  //(starting_pos) => goes to the end of the string
console.log('substr', substr);  //string
substr = string.substr(4, 8);   //(starting_pos, length) => starting from starting_pos + length of characters
console.log('substr', substr);  //a string

console.log('string after modifications', string);  //I'm a string, Hello World

var string2 = `I'm a string, Hello Hello World`;
var replaceString = string2.replace('Hello', 'Goodbye');
console.log('replaceString', replaceString); //I'm a string, Goodbye Hello World
//i == ignore case, g == global (replace all occurences)
replaceString = string2.replace(/Hello/ig, 'Goodbye');
console.log('replaceString', replaceString); //I'm a string, Goodbye Goodbye World
var lowerCase = string2.toLowerCase();
console.log('lowerCase', lowerCase); //i'm a string, hello hello world
var upperCase = string2.toUpperCase();
console.log('upperCase', upperCase); //I'M A STRING, HELLO HELLO WORLD

var string3 = '   I have padding   ';
var trimmed = string3.trim();
console.log('trimmed', trimmed); //I have padding

var charAt = string2.charAt(0);
console.log('charAt(0)', charAt);   //I
charAt = string2[0];
console.log('charAt[0]', charAt);   //I
string2[0] = 'A';   //this has no effect on the string
charAt = string2[0];
console.log('charAt', charAt);   //I
var stringSplit = string2.split(' ');   //["I'm", "a", "string,", "Hello", "Hello", "World"]
for(let split of stringSplit) console.log(split);


var string4 = 'Hello World, Hello World.';
var indexOf = string4.indexOf('World');
console.log('indexOf', indexOf);   //6
var lastIndexOf = string4.lastIndexOf('World');
console.log('lastIndexOf', lastIndexOf);   //19
var startsWith = string4.startsWith('Hello');
console.log('startsWith', startsWith);   //true
startsWith = string4.startsWith('World');
console.log('startsWith', startsWith);   //false
var endsWith = string4.endsWith('World.');
console.log('endsWith', endsWith);   //true
endsWith = string4.endsWith('World');
console.log('endsWith', endsWith);   //false
var includes = string4.includes('World');
console.log('includes', includes);   //true
includes = string4.includes('Worldd');
console.log('includes', includes);   //false


var cars = ['Saab', 'Volvo', 'BMW'];
console.log('cars', cars);  //['Saab', 'Volvo', 'BMW']
cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log('cars', cars);  //['Saab', 'Volvo', 'BMW']
var car1 = cars[2];
console.log('car1', car1);  //'BMW'
cars[2]= "Opel";
car1 = cars[2];
console.log('car1', car1);  //'Opel'
console.log('cars.length', cars.length);    //3

var cars = ['Saab', 'Volvo', 'BMW', 'Mercedes'];
var carsSlice = cars.slice(1, 3);
console.log('carsSlice', carsSlice);    //["Volvo", "BMW"]
cars.push('Opel');  //insert at the end of the array
console.log('cars', cars);  //["Saab", "Volvo", "BMW", "Mercedes", "Opel"]
var carPop = cars.pop();
console.log('cars', cars);  //["Saab", "Volvo", "BMW", "Mercedes"]
console.log('carPop', carPop);  //Opel
cars.unshift('Toyota');
var carShift = cars.shift();    //insert at the start of the array
console.log('cars', cars);  //["Saab", "Volvo", "BMW", "Mercedes"]
console.log('carShift', carShift);  //Toyota
var secondCars = ['Hyundai', 'Peugeot'];
var mergedCars = cars.concat(secondCars);
console.log('mergedCars', mergedCars);  //["Saab", "Volvo", "BMW", "Mercedes", "Hyundai", "Peugeot"]

var cars = ['Saab', 'Volvo', 'BMW', 'Mercedes'];
for(let i = 0; i< cars.length; i++){    //here, i is a number
    console.log(`cars[${i}]`, cars[i]);
}
for(let i in cars){ //here, i is a string
    console.log(`cars[${i}]`, cars[i]);
}
for(let car of cars){
    console.log('car', car);
}
cars.forEach((value, index, cars) => {
    console.log(`cars[${index}]`, value);
})

var mapped = cars.map((value, index, cars) => 'Car : ' + value);
console.log('mapped', mapped);
var mapped2 = cars.map((value, index, cars) => {
    return 'Car : ' + value;
});
console.log('mapped2', mapped2);

var filtered = cars.filter((value, index, cars) => value.length>4);
console.log('filtered', filtered);


var myObject = {
    name : 'Johnny',
    lastName : 'Silverhand',
    age: 32
}
console.log('myObject', myObject);  //{"name" : "Johnny", "lastName" : "Silverhand", "age" : 32}
myObject.name = 'NotJohnny';
console.log('myObject', myObject);  //{"name" : "NotJohnny", "lastName" : "Silverhand", "age" : 32}
myObject.location = 'Arasaka Tower';
console.log('myObject', myObject);  //{"name" : "NotJohnny", "lastName" : "Silverhand", "age" : 32, "location" : "Arasaka Tower"}
delete myObject.location;
console.log('myObject', myObject);  //{"name" : "NotJohnny", "lastName" : "Silverhand", "age" : 32}
var name = myObject.name;
console.log('name', name);  //NotJohnny
var middleName = myObject.middleName;
console.log('middleName', middleName);  //undefined
middleName = myObject.middleName ? myObject.middleName : 'V';   // myObject.middleName ? is the same as myObject.middleName!=null ?
console.log('middleName', middleName);  //V
var emptyObject = {};


function add (x, y) {
    return x + y;
}
var addXY_1 = add(10, 20);
console.log('addXY_1', addXY_1);    //30

const add_2 = function(x, y){
    return x + y;
}
var addXY_2 = add_2(30, 20);
console.log('addXY_2', addXY_2);    //50

const add_3 = (x, y) => {
    return x + y;
}
var addXY_3 = add_3('A number : ', 20);
console.log('addXY_3', addXY_3);    //A number : 20 

const add_4 = (addFunc) => {
    return add_2(100, 200);
}
var addXY_4 = add_4(add_3);
console.log('addXY_4', addXY_4);    //300

const add_5 = (addFunc) => {
    return addFunc(1000, 500);
}
var addXY_5 = add_5(add_3);
console.log('addXY_5', addXY_5);    //1500

const mainFunc = (text, callback) => {
    console.log('text', text);
    return callback('some callback text');
}

const callbackFunc = (secondText) => {
    console.log('secondText', secondText);
    return 'returning : ' + secondText;
}

var returnValue = mainFunc('MAIN TEXT', callbackFunc);
//MAIN TEXT
//some callback text
console.log('returnValue', returnValue); //returning : some callback text

var paragraph = document.getElementById('paragraph1');
paragraph.innerHTML = 'Changed your value buddy.';
paragraph.style.textAlign = 'right';
paragraph.style.setProperty('color', 'red');

window.sessionStorage.setItem('sessionStorageItem', 'MyItem');
var sessionStorageItem = window.sessionStorage.getItem('sessionStorageItem');
console.log('sessionStorageItem', sessionStorageItem); //MyItem

window.localStorage.setItem('localStorage', 'MyItem2');
var localStorageItem = window.localStorage.getItem('localStorage');
console.log('localStorageItem', localStorageItem); //MyItem2

document.cookie = "username=Johnny Silverhand";
document.cookie = "password=Arasaka";
var cookie = document.cookie;
console.log('cookie', cookie); //"username : Johnny Silverhand; password : Arasaka"

document.cookie = "username=Johnny Silverhand; expires=1 Jan 1970 12:00:00 UTC; path=/";
cookie = document.cookie;
console.log('cookie', cookie); //"password : Arasaka"

var timeout = setTimeout(()=>{
    paragraph.style.setProperty('color', '#000000');
}, 500)

var counter = 0;
var interval = setInterval(()=>{
    counter++;
    paragraph.style.setProperty('color', '#' + counter);
}, 100)

//clearTimeout(timeout);
//clearInterval(interval);