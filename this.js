const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.name);
    }
}

person.greet();

const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);        // {name: "Jack", age ...}
        console.log(this.age);  // 25

        // inner function
        function innerFunc() {
        
            // this refers to the global object
            console.log(this);       // Window { ... }
            console.log(this.age);    // undefined
            
        }

        innerFunc();

    }
}

person.greet();

const person = {
    name : 'Jack',
    age: 25,

    // this inside method
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.age);

        // inner function
        let innerFunc = () => {
        
            // this refers to the global object
            console.log(this);
            console.log(this.age);
            
        }

        innerFunc();

    }
}

person.greet();
