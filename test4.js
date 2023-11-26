const numbersArray = [1, 2, 3, 5, 6, 7, 8, 9];

const findMissingNumber = (arr) => {

   let minValue = Math.min(...arr);
   let maxValue = Math.max(...arr);

   let findMissNumber = [];

   for (let index = minValue; index <= maxValue; index++) {
    
    if(!arr.includes(index)){
        findMissNumber.push(index);
    };


    
   }

   return findMissNumber;


}

const missingNumber = findMissingNumber(numbersArray);
console.log(`missedNumber : ${missingNumber}`);