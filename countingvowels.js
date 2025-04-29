function countVowels(word){
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (const i of word){
        if (vowels.includes(i)){
            count++;
        }
    }
    return count;
};


module.exports = { countVowels };