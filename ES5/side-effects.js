let myFunction = () => {
    console.log("Best Sedan");
    };

    const handler = { //create handler
       set : function(target, prop, value) {
           if (prop === 'myFunction' && value === 'Merc') {
               myFunction();
           }
           else { return "Function not found"; }
       }
   };

   const rating = new Proxy(myFunction, handler); //assign proxy to a variable 
   
    rating.myFunction = "Merc"; // Best Sedan
    rating.myFunction = "BMW"; // Function not found
