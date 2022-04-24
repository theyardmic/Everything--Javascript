//Creating an Object Using a template Literal
let Student= {
  NameofStudent: "Kevin Mcallister",
  AgeofStudent: 29,
  Course: "Computer_Science",
};

//Creating an Object Using a Constructor function
function Student ('Name','age', 'course')
{
  this.NameofStudent= 'Name',
  this.AgeofStudent= 'Age',
  this.Course='course',

}
//Creating an Object and Passing the Parameters/Properties
let Student= new Student ("Kevin Mcallister", "29", "Computer_Science");

//Displaying Object properties
console.log(Student.Name);
