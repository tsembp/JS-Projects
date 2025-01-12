const wordInputField = document.querySelector("#input");

function reverseString(str){
    // [d, o, g] -> [g, o, d] -> god
    return str.split('').reverse().join('');
}

function check(){
    const value = wordInputField.value;
    const reversed = reverseString(value);

    if(value === reversed){
        alert('Palindrome.');
    } else{
        alert('Not a palindrome.');
    }
}