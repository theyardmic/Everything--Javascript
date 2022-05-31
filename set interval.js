// program to display a text using setInterval method
function greet() {
    console.log('Hello world');
}

setInterval(greet, 1000);


// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

let display = setInterval(showTime, 5000);
