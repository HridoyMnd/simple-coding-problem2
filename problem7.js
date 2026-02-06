
// problem 7 solution
// const obj = { characters: 22, words: 5, vowels: 8, consonants: 14 } //expected output

const sentencer7 = "JavaScript is fun to learn";
const vowels = ["a", "e", "i", "o", "u"];

function textStats(sentencer7) {
const characterCount = sentencer7.split(' ').join("").length;
const wordCount = sentencer7.split(" ").length;
const sentencer7Object = {};
sentencer7Object.character = characterCount;
sentencer7Object.word = wordCount;
sentencer7Object.vowel = 0;

for (const letter of sentencer7) {
    if (vowels.includes(letter)) {
        sentencer7Object.vowel++;
    }
}
sentencer7Object.consonant = characterCount - sentencer7Object.vowel;
return sentencer7Object;
}

const result7 = textStats(sentencer7);
console.log(result7);