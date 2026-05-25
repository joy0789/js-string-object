let sentence = 'I am learning web deb.';
let reverse = '';
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// hard way to perform reverse
let rev = ''; 
for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// shortcut reverse
const reversed= sentence.split('').reverse().join('');
console.log(reversed);