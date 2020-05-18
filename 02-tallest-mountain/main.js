/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let mountains = [1000, 145000, 100000,750000, 600000, 5000]
let i = 0
let tallestMountain = document.querySelector('#text')
while(i < mountains.length){
  tallestMountain.innerText = ('The tallest mountain is' + ' ' + Math.max.apply(null,mountains) + ' ' + 'feet tall')
   i++
}


