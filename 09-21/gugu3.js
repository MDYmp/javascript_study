var dan = 2;
var number = 1;

for(dan = 2; dan < 10; dan++){
    for(number = 1; number < 10; number++){
        console.log(`${dan} * ${number} =`, dan*number);
    }
    console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ")
}



var star = "*";
var starNumber = 1;

for(star = "*"; starNumber < 6; star += "*", starNumber++){
    if (starNumber > 5){
        break
    }
}
console.log(star)



var a = "";
for (a = ""; ) {
    for (){
        a += "*";
    }
    a += "\n";
}





var a = "";
a += "aa";
a += "\n";
a += "cc";
console.log(a);