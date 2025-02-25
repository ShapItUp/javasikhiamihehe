//console.log(`Hello`);

//let fullName=" Shaptarshi Saha"; //strings
//let age=25; //numbers
//let isStudent= false; //booleans

//document.getElementById("p1").textContent =`Your name is ${fullName}`; 
//document.getElementById("p2").textContent = `You are ${age} years old`  ;
//document.getElementById("p3").textContent = `Enrolled :   ${isStudent}`;

//arithmetic operators:

//let students = 30;
//students=students - 1;
//students= students *2;
//students = students /2 ;
//students = students ** 3 ; 
//students = students % 2;
//let extraStudents = students % 3;

//students  += 2;
//students  *= 2;
//students  **= 2;  
//students++;
// console.log(students);


//=====================//

/*
  operator precedence 
  parenthesis
  exponents
  multiplication and division and modulo
  addition and subtraction
*/
//let result = 1+2+3+4 ** 2;
//let result = 12 % 5 +8 /2; 
//let result = 6/2 ** (2 +5);
//console.log(result);


//=======================================================//

//how to accept user input

//1.easy way= window prompt
//professional way = HTML textbox


/*let username;

username= window.prompt("Whats your username?");
console.log(username);
*/
 //===========================//

let username;
document.getElementById("mySubmit").onclick= function(){
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`; //welcome theke hellobrocode hoilo
  //console.log(username);

//bascially edike username e ja dibo ta inspect e dekhbo,username er mytext id ta grab kore and submit dile my sybmit id call kore dekha jay console e.
}












  



 






 

