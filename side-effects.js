let myFunction = () => {
    console.log("Best Sedan");
    }

    const handler = {
       set : function(target, prop, value) {
           if (prop === 'myFunction' && value === 'Merc') {
               myFunction();
           }
           else { return "Function not found"; }
       }
   };

   const proxy = new Proxy(myFunction, handler);
   
   proxy.myFunction = "Merc";