//STRING MANIPULATION FUNCTIONS
//Reverse a String: Write a function that reverses a given string.
let string = "Hello people of the world"

function reverseString(str) {
    return str.split('').reverse().join(''); //chaining 
    }
    //split('') = splits the string into an array of substrings based on a specified delimiter (in this case it is a space ['']). so the substrings are words of the sentence
    //reverse() = method that reverses the elements of an array in place.
    //join('') = method is used to concatenate elements of an array into a single string, with an optional separator between each element.(in this case it is a space ['']) .joins the array of substrings with a space between each substring
console.log(reverseString(string));


//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
    }   
    console.log(countCharacters(string));


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(str) {
    return str.split(' ') .map(word => word[0].toUpperCase()) .join(' ')
        }
        console.log(capitalizeWords(string));







// ARRAY FUNCTIONS
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    function findMax(arr) { 
        return Math.max(...arr);//Math.max() = returns the largest of the numbers expanded from the array
        }//...arr = spread operator. allows an iterable (e.g., an array) to be expanded into individual elements.
        console.log(findMax(numbers));

        function findMin(arr) {
            return Math.min(...arr);//Math.min() = returns the smallest of the numbers expanded from the array
            }
            console.log(findMin(numbers));
                    
            
//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(numbers)); 


// Filter Array: Implement a function that filters out elements from an array based on a given condition. using the .filter method
function filterArray(arr) {
    return arr.filter((element) => element > 3);
    }

    console.log(filterArray(numbers));








// MATHEMATIC FUNCTIONS
// Factorial: Write a function to calculate the factorial of a given number.
//Factorial =  calculation of  the product of all positive integers up to a given number. For example, the factorial of 5 is calculated as 5! = 5 x 4 x 3 x 2 x 1 = 120.
    function factorial(num) {
        let result = 1;

        for (let i = 2; i <= num; i++) {
            result = result * i
        }

        return result;
    }   
    console.log(factorial(5)); 



    

// Prime Number Check: Create a function to check if a number is prime or not.
// Prime Number = A prime number is a natural number greater than 1 that is only divisible by 1 and itself.

function primeNum(numb){
    if (numb < 2){
        return `${numb} is  not a prime number`;
    }
     else if (numb === 2) {
            return `${numb} is a prime number`
        } 


    for (let i = 2; i < numb; i++) {

         if (numb % i === 0) {
            return `${numb} is not a prime number`
        }

        else{
            return `${numb} is a prime number`
        }
        
    }

}

console.log(primeNum(2))


// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. 
//Fibonacci sequence = a sequence where each number is a sum of it's two preceeding numbers
function fibonacci(num){
    const fib = [0 , 1];

    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      
    }

    return fib
}
console.log(fibonacci(7));
            
            
           
        