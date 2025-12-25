
let string = "HaxnaH";
string = string.toLowerCase();
let arr = string.split("");
 
arr2 = arr.slice().reverse();


let j=arr.length-1;
isPalindrome = true;

for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr2[i]){
        console.log("Not a palindrome");
        isPalindrome = false;
        break;
    }
}

if(isPalindrome==true){
    console.log("Palindrome")
}




