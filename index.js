function writeCards (names, event) {
    let emptyArray = [];
    for (let i = 0; i < names.length; i++) {
    emptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
    // console.log(i);
    };
    return emptyArray;
};
writeCards (["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown () {
    let n = 10;
        while (n>=0){
            console.log(n);
            n--;
        };
       
    };
   countDown();
   