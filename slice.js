// slice example
const name = "slice"
console.log(name.slice(2, 5));

// split example
const sentence = 'I am a good and hardworking person.';
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'joy , rahul, sakin, digonto, alif, mifta';
const friends = friendsStr.split(',');
console.log(friends);

// join example
const realFriend = ['joy , rahul, sakin, digonto, alif, mifta'];

console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));