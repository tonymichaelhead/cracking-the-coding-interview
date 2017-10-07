/*Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other. */

const checkPermutation = (str1, str2) => {
    return JSON.stringify(str1.split('').sort()) === JSON.stringify(str2.split('').sort());
}