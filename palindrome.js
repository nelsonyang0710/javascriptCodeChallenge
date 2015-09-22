/**
 * Created by nelson on 9/22/2015.
 */
function isPalindrome(word) {
    // Let the developer write this function
    var length = word.length;
    for (var i = 0; i < length/2 ; i++)
    {
        if (word[i] !== word[length-i-1])
        {
            return false;
        }
    }
    return true;
}

// This is the test. DO NOT DELETE.
var words = [["a", true], ["kayak", true], ["pullup", true], ["toyota", false], ["apple", false]];
for (i = 0; i < words.length; i++) {
    var wordResult = words[i];
    var word = wordResult[0];
    var expected = wordResult[1];
    var actual = isPalindrome(word);
    if (actual == expected) {
        console.log(word, " matches :-)");
    } else {
        console.log(word, " should be " + expected);
    }
}

console.log("\n\n");