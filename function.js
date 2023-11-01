//Sum of all numbers in an array
//anonymous function
const sum=function(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
        result=result+arr[i];
    }
    console.log(result);
    }
    sum([1,2,3,4,5]);

    //IIFE
    (function(arr){
        let result=0;
        for(let i=0;i<arr.length;i++){
            result=result+arr[i];
        }
        console.log(result);
        })([1,2,3,4,5]);

        //Arrow function
        const sum=(arr)=>{
            let result=0;
            for(let i=0;i<arr.length;i++){
                result=result+arr[i];
            }
            console.log(result);
            }
            sum([1,2,3,4,5]);

// Print odd numbers in an array
//anonymous function

const printOdd = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        console.log(arr[i]);
      }
    }
  };
  
  printOdd([1, 2, 3, 4, 5, 6, 7, 8]);

  // IIFE
(function (arr) {
    for (let i in arr) {
      if (arr[i] % 2 === 1) {
        console.log(arr[i]);
      }
    }
  })([1, 2, 3, 4, 5, 6, 7, 8]);

  //ARR0W FUNCTION
  const printOdd =  (arr) =>{
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        console.log(arr[i]);
      }
    }
  };
  
  printOdd([1, 2, 3, 4, 5, 6, 7, 8]);

  //Return all the prime numbers in an array

  //anonymous function
  const primenumber=function (arr){
    for(let i=2;i<arr;i++){
        if(arr%i===0)
        return false;
    }
    return true;
}
console.log(primenumber([4]));
console.log(primenumber([13]));

//Arrow function
const primenumber= (arr) =>{
    for(let i=2;i<arr;i++){
        if(arr%i===0)
        return false;
    }
    return true;
}
console.log(primenumber([4]));
console.log(primenumber([13]));

//Return all the palindromes in an array

//anonymous function

const palindrome=function(str){
  let result="";
  for(let i=str.length-1;i>=0;i--){
      result=result+str[i];
  }
  
  if(result==str){
      return true;
  }else{
      return false;
  }
  }
  console.log(palindrome("edwin"));
  console.log(palindrome("racecar"));

  //Arrow function

  const palindrome=(str)=>{
    let result="";
    for(let i=str.length-1;i>=0;i--){
        result=result+str[i];
    }
    
    if(result==str){
        return true;
    }else{
        return false;
    }
    }
    console.log(palindrome("edwin"));
    console.log(palindrome("racecar"));





           
