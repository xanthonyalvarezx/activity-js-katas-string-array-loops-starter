/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE
let newArray = []
 let i = 1
 let result = document.querySelector('#result')
 
 
 
 while( i < redundantArray.length - 1){
 newArray.push(i)
   i++
   
  }
 result.innerText = 'this is the new array ' + newArray + ' ' +  ' This is the redundant array' + redundantArray
  
  


