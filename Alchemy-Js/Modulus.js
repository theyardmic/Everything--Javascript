function scream(n){
    let str = "";
    for(i = 1; i<=n; i++){
    let rem = i % 2;
    let even = rem === 0;
        if(even){
    str += "A";
    }
        else {
            str += "a";
        }
        
    return str;

}
