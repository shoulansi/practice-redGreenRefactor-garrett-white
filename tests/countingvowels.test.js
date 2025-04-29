const isCountVowels = require("../countingvowels");

test("should fail and returns null when its not a string", function(){
    expect(isCountVowels.countVowels(123)).toBe(null);
});

test("should return amount of vowels in an inputted string", function(){
    expect(isCountVowels.countVowels("Hello")).toBe(2);
})