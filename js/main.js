// 배열
fruits = ['apple', 'banana', 'coconut', 'dragonfruit']

// 랜덤 추출, 띄우기
let change = () =>{
    let fruit = fruits[Math.floor(Math.random()*fruits.length)];
    document.getElementById("question").innerHTML=fruit;
}

// 알파벳 선택자
let alphabets = document.getElementsByClassName('alphabet');

// 누른 키와 알파벳 비교
let checkKeyPressed = (keyCode) => {

    // 사용된 알파벳 비활성화
    for (var i = 0; i < alphabets.length; i++){
        if(keyCode.key == alphabets[i].innerHTML){
            alphabets[i].classList.add('disabled');
        }
    }
}

// 키보드 누르면 바인딩
document.addEventListener("keydown", checkKeyPressed, true);

window.onload = () => {
    change();
}