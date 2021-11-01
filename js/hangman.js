class hangman {
    constructor(word, remainChances){
        this.word = word.toLowerCase().split('')
        this.remainChances = remainChances
        this.guessedLetters = []
        this.status = 'playing'
    }
    // 현 상태 나타내기
    calculateStatus() {

        // every 는 배열안의 모든 요소가 판별 함수를 통과하는지 테스트한다.
        // word(정답 배열)에 guessedLetters(추측 배열)이 포함되는지,
        const finished = this.word.every(
            (letter) => this.guessedLetters.includes(letter) || letter === ' '
        )
        
        // 남은 기회 확인
        if (this.remainingGuesses === 0) {
          this.status = 'failed'
          // alert(`Nice try! The word Was '${this.word.join('')}'`)
        } else if (finished) {
          this.status = 'finished'
          // alert('Great Work! You Guessed the word.')
        } else {
          this.status = 'playing'
        }
      }

    // get 은 객체에 접근 할 때, 내부 변수 상태를 반영하여 유동적인 값을 나타낼 때 사용함.
    // => statusMessage 라는 속성은 아래 구문을 실행하여 나오는 값을 가진 속성이다.
    // statusMessage는 status 속성에 따라 각기 다른 String을 가진다.(유동적임)
    get statusMessage() {
        if (this.status === 'playing') {
        return `Guesses left : ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
        return `Nice try! The word was '${this.word.join('')}'`
        } else if (this.status === 'finished') {
        return 'Great Work! You guessed the word.'
        }
    }

    // 현재 답을 맞추는 속성?
    get puzzle() {
        let puzzle = ''
    
        this.word.forEach((letter) => {
          if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
          } else {
            puzzle += '*'
          }
        })
        return puzzle
      }

      // 예측 단어를 파라미터로 받는 함수이다.
      // 문제 진행해주는 함수
      makeGuess(guess) {
        guess = guess.toLowerCase()
        // 예측한 
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
          //게임이 끝나면 입력을 멈춤
          return
        }
    
        if (isUnique) {
          this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess) {
          this.remainingGuesses--
        }
    
        this.calculateStatus()
      }

      
}

