// program using switch statement
let a = 3; //intializing initial case(test case)
switch (a) {
    case 1:
        a = "one";//testing against the first condition
        break;
    case 2:
        a = "two";
        break;
    case 3:
        a = "three";
        break;
    default:
        a = "undefined";//defaulr switch result incase of invalid input
        break;
        }
console.log(`The number is ${a}`);//displaying the final condition result
