/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE
 let i = 0
 let result = document.querySelector('#result')
 let newArray = redundantArray
 document.write(redundantArray)
 
 while( i <= redundantArray.length){
  
   i++
   
  }
  newArray.splice(0, 1)
  newArray.splice(2, 1)
  
  result.innerText = newArray 


