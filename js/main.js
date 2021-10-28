// 배열
fruits = ['apple', 'banana', 'coconut', 'dragonfruit']

// 랜덤 추출
let fruit = fruits[Math.floor(Math.random()*fruits.length)];

let change = () =>{
        document.getElementById("question").innerHTML=fruit;
}

window.onload = () => {
    change();
}