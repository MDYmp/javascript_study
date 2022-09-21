var count = 0;

while(true){
    if (count < 5){
        console.log("끝!!!");
        break;
    } else {
        console.log("count :", count);
        count++;
    }
    console.log("무한루프");
}

var count1 = 0;
for(;;){
    console.log("무한루프");
}