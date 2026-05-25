// uppercase: A B C D
// lowercase: a b c d

const subject = 'chemistry';
const book = 'ChemIsTry';

if(subject.toLowerCase() === book.toLowerCase){
    console.log('I am reading chemistry book');
}
else{
    console.log('doing nothing');
}

const drink = ' water';
const liquid = 'water ';
// Note: trim will remove white space from the start and end not middle
if(drink.trim() === liquid.trim()){
    console.log('drinking water!!');
}
else{
    console.log('drinking juice');
}