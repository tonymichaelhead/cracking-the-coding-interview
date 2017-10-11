/*
String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring of another. 
Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").

 Hints:#34,#88, #704
*/

const isSubstring = (s1, s2) => {
    const doubledString = s2 + s2;
    return doubledString.includes(s1);
}