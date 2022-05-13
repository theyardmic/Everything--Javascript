// program to remove an item from an object

// creating an object
let student = { 
    name: 'SCOTT,
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Sample object.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);
