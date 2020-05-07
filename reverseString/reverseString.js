const reverseString = function(str) {
 var newArray = str.split('');
 var emptyArray = [];
 for (var i = newArray.length; i >= 0; i--) {
    emptyArray.push(newArray[i]);
} 
var reverseString = emptyArray.join('');
return reverseString;
}

module.exports = reverseString
