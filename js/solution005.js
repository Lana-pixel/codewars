/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined*/

// solution 1
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
 }
 
 [true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true]

   /* solution 2 
   function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

solution 3

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
}
*/