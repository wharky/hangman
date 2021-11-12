export const createWord = async (letterLength=1) => {
    /* let res = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${letterLength}`)
       let jsonData = await res.json()
       return jsonData.puzzle */
   
       let response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${letterLength}`)
       // 이 조건문이 없으면 일반적인 then() 으로는 콜백 처리가 되지 않는다.. then() 으로 받을 방법 찾아볼 것
       if (response.status === 200) {
           const data = await response.json()
           console.log(data)
           return data.puzzle
       }
   
   }