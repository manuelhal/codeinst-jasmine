//creating Calculator object
Calculator = function() {
    this.value = 0;
};


//adding 'add' function to the Calculator obj
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("ERROR!");
    }
};


// function addition(a, b) {
//     if (typeof(a) == 'number' && typeof(b) == 'number') {
//         return a + b;
//     }else{
//         // return 'ERROR!!!'
//         alert('ERROR!!!');
        
//     }
// }

