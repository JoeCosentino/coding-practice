function palindrome(str) {

    var reg = /[\W_]/g

    var smallStr = str.toLowerCase().replace(reg, '');

    var reversedStr = smallStr.split('').reverse().join('');
    if (reversedStr === smallStr) {
        return true
    } else {
        return false
    }
}


palindrome('racecar');