const repeatString = function(str, num) {
    newStr = ''
    if(num < 0) {return 'ERROR'} else {
        for (var i = 0; i < num; i++) {
            newStr = newStr + str;
        } 
        return newStr;
    }
}

module.exports = repeatString
