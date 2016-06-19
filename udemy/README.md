## Introduction

##### What is Node.js
    - Node engine is same as Chrome engine
    - You can go to Chrome developer console and print same commands
    - Node have extra lib which browser doesn't have
        ex: process.version work on Node but not in Chrome
##### Creating variables
    - var hello = 'Hello World'
##### Strings
    - Use single quotes
    - Valid Variable name
        - Lower or upper case letter
        - $ and _
        - Use camel case 'lastName' to make reading essay
##### Number
    - var age = 28;
##### If statements
    - if(10 === 11 && 'shekar' === ' tom'){
      }
##### Functions
    - function funcName(){

    }
##### Objects
    - var person = {};
       person.firstName="Shekar";
       person.lastName="Shekar";
    - var person = {
         firstName: 'Shekar',
         lastName: 'Allam'
     }
##### Project Bank Account
    - Open account
    - Deposit
    - Withdraw
    - Balance
##### Boolean
    - var isValid = false;
##### Undefined
    - var name = undefined;
##### Arrays
    - var grades = [100,50];
##### Bank account Part2
    -
##### For While loop
##### Variable Scope
    - variable declared inside function can't be accesed outside of function
    - functions can access and modify global variable
    - local varibale is completely different from global variable even if name of var is same
#### Closures
    - closure is function created inside another function
##### Bank account Part3

## Getting input and storing data

##### Creating npm based app
    - npm init to create package.json
    - npm install node-persist@0.0.6 --save to add node-persist module to our app
        - This will create dependecies attribute in pacakge.json
        - Also create node_module folder also get created
    - Configure script like start in package.json to make life easier

#####
    - Include third party library's with require
        - var storage = require('node-persist');
    -











