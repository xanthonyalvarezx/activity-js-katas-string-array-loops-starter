/*
  HANGMAN LITE

  1. Create a variable (`word`) which contains any lengthy word.**
  2. Create a second variable (`letter`) which indicates the letter
     that the player "guessed" (optional: use an input textbox and
     click event listener to obtain an actual player guess).
  3. Write a WHILE statement which loops over the `word` string and
     counts the number of times the "guessed" letter appears.
  4. If the letter is found in the string, display "The letter X
     exists N times in this word!" on the page (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display "Nope, that
     letter doesn't exist in my word!" on the page.
*/

// YOUR CODE HERE
let word = ('Mississippi')
let letter = document.querySelector('#guess')
let button = document.querySelector('#submit')
let letterCount = 0
let i = 0
let result = document.querySelector('#text')



button.addEventListener('click', function () {


   letter = document.querySelector('#guess')

   while (i < word.length) {
     
     if (word[i] === letter.value) {
       
         letterCount++
        }
      i++
      }
   if (letterCount < i){
      result.innerText = ('Letter is in the word' + ' ' + letterCount + ' ' + 'time/s!')
   } else result.innerText = ('Nope that letter does not exist in my word')

   
   
})
