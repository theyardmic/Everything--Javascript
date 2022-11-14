let myFunction = () => {
    console.log("Best Sedan");
    }

    const handler = { //create handler
       set : function(target, prop, value) {
           if (prop === 'myFunction' && value === 'Merc') {
               myFunction();
           }
           else { return "Function not found"; }
       }
   };

   const proxy = new Proxy(myFunction, handler); //assign proxy to a variable 
   
    proxy.myFunction = "Merc"; // Best Sedan
    proxy.myFunction = "BMW"; // Function not found
