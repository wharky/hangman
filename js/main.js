// 무작위 단어 가져오기
const getPuzzle = async () =>{
    // async, await HTTP 비동기 통신 처리 문법
    const response = await fetch('https://puzzle.mead.io/puzzle?wordCount=1')
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle;
    } else {
        throw new Error('no words founded')
    }
}

// 화살표 함수! 변수 아님!
/* let getWord = () => {
    fetch('https://puzzle.mead.io/puzzle?wordCount=1')
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));
} */

function needCallback(){
    // VANILLA
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://puzzle.mead.io/puzzle?wordCount=1', true);
    xhr.send();

   
    console.log(xhr)
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log('im finished')
    } else {
        console.log('im not ready')
    }

    console.log('status is...' + xhr.readyState)
    console.log('status is...' + xhr.status)
    console.log('status is...' + xhr.responseText)

    // vanilla 가 안되는 이유는
    // 우리가 서버로 요청을 보낼 때 요청 개체에 URL, OPTION 처럼 프로퍼티를 담아서 같이 보낼 것이다.
    // 그 프로퍼티는 기본적으로 CORS를 가지고 있다.
    // 그런데 그 요청값이 LINK,SCRIPT,IMG등 같은 파일일 경우 요청 개체는 NO-CORS가 된다.
    // 그 요청에 CROSS ORIGIN 즉 브라우저 호환성을 부여하면 요청 개체의 속성은 다시 CORS가 된다.
    // 그래서 기본적으로 CORS의 요청을 확인하여 처리해야 하는데, 크로스 브라우징 처리가 잘 되지 않아서
    // NO-CORS인 채로 데이터 요청을 하면 CORS 에러가 발생하여 결과값에 에러가 뜨는 것이다.

    // FETCH
    const request = new Request('https://puzzle.mead.io/puzzle?wordCount=1');
    fetch(request).then(response => console.log(response.status))

    // FETCH는 이제 시대가 상당히 지나고 나온 신세대 기술이다 :0
    // FETCH는 요청할 때 요청의 유형을 판단하여 MODE라는 프로퍼티에 담아 전달하는데,
    // 총 다섯 종류의 MODE를 종류해서 보낸다.
    // 간단히 말하자면 어느 정도 선택지를 예상하고 미리 유형을 만들어 보내는 것이다.
    // -> NO-CORS 뿐 아니라 다른 처리 관련 에러에 대해 알아서 포맷팅을 하서 데이터를 보내는 것이라고 생각하면 될 것 같다.
    // 그래서 일반 AJAX 통신이 안되도 FETCH로 하면 에러가 해결될 가능성이 높다. ^^
    //
    
}

/* needCallback(function(result){
    console.log(reponse);
}) */


window.onload = () => {
    /* console.log(getPuzzle()) */
    /* getWord(); */
    needCallback()
}

/* 
// 배열
fruits = ['apple', 'banana', 'coconut', 'dragonfruit']

// 랜덤 추출, 띄우기
let change = () =>{
    let fruit = fruits[Math.floor(Math.random()*fruits.length)];
    document.getElementById("question").innerHTML=fruit;
    return fruit;
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
    let word = change();
    let splitedWord = word.split('');
    let puzzle = splitedWord.length;
} */

