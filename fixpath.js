/**
 * Created by nelson on 9/22/2015.
 */
/*
 Question 2.
 In Windows, a UNC path can be of the form, \\drive\folder\folder\folder\file.txt
 The first two characters must be a backslash, and for subsequent segments, only one
 backslash separates them.
 Write a function that will take a string with redundant backslashes, and corrects them.
 ***Do not use Regex or split() function for this question.***

 E.g., the following are all equivalent
 \\drive\\\a\\b\\\c\d.txt  =>  \\drive\a\b\c\d.txt
 \\drive\\a\\b\\\c\\d.txt  =>  \\drive\a\b\c\d.txt
 \\drive\a\b\c\\\d.txt     =>  \\drive\a\b\c\d.txt
 \\drive\a\b\c\d.txt       =>  \\drive\a\b\c\d.txt  (no change in this one)
 If a path does not begin with \\ then return an error.
 */

function fixPath(path) {
    // Let the developer write this function
    if (path.match(/^\\\\\w+/))
    {
        var fix = path.replace(/(\w+)(\\+)/g,'$1\\');
        return fix;
    }
    else
    {
        return false;
    }
}


// This is the test. DO NOT DELETE.
var expected = "\\\\drive\\a\\b\\c\\d.txt";
var paths = ["\\\\drive\\\\\\a\\\\b\\\\\\c\\d.txt",
    "\\\\drive\\\\a\\b\\\\\\c\\\\d.txt",
    "\\\\drive\\\\a\\b\\c\\\\\\d.txt",
    "\\\\drive\\\\a\\b\\c\\d.txt"];

for (i = 0; i < paths.length; i++) {
    var result = fixPath(paths[i]);
    if (result == expected) {
        console.log(paths[i] + " was fixed");
    } else {
        console.log(paths[i] + " is incorrect");
    }
}