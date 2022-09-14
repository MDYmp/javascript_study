var a = 3;
var b = 4;
var c = 5;

console.log(c);

if (a < b){
    if (b < c){ // 'a < b < c' 또는 'b < a < c'
        max = c;
        if (a < b){ // 'a < b < c'
            min = a;
        }else{ // 'b < a < c'
            min = b;
        }
    }else{ // 'a < c < b' 또는 'c < a < b'
        max = b;
        if (a < c){
            min = a;
        }else{
            min = c;
        }
    }
}else{ // b < a
    if (a < c){ // b < a < c
        max = c;
        min = b;
    }else{ // c < a
        max = a;
        if (b < c){ // b < c < a
            min = b;
        }else{ // c < b < a
            min = c;
        }
    }
}
console.log(`최대값 ${max}\n최소값 ${min}`)