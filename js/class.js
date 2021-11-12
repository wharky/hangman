import {createWord} from '/js/words.js'

const newWord = async () => {
    let word = await createWord(1)
    console.log(word)
    document.querySelector("#inputArea").innerText = word;
}

// 모듈은 자체 스코프를 가지고 있기 때문에 함수를 외부에서 호출할 수 없다.
// 하지만 window 전역 객체에 선언해주면 외부 html에서도 호출하여 사용이 가능함!
window.newWord = newWord;

// 아니면 
// 이런 식으로 js에서 html에 바인딩을 걸어서 사용할 수도 있다.
let sir = () => {
    console.log('yes sir');
}

document.querySelector('#maButton').addEventListener('click', sir);
                        // 태그명                  // 클릭시,  함수명