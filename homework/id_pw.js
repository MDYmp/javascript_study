var id = "easy1004"
var pw = "123456"

var user_id = "easy1004";
var user_pw = "123456";

if (id == user_id && pw == user_pw){
    console.log("모두 일치 합니다.")
}else if (id != user_id){
    console.log("아이디가 일치하지 않습니다.")
}else{
    console.log("비밀번호가 일치하지 않습니다.")
}

if (id == user_id) {
    if (pw == user_pw) {
        console.log('모두 일치')
    } else {
        console.log('비밀번호가 틀렸어요');
    }
} else {
    console.log('아이디가 일치하지 않습니다.')
}