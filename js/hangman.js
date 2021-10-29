class Hangman {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log(a);
        console.log(b);
    }
    
    move = () =>{
        document.getElementById('question').innerText += 'a';
        console.log(document.getElementById('question').innerText)
    }
}

let man = new Hangman('im a string a', 2);

console.log(man.move());
 