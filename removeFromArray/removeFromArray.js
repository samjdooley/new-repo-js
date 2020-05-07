const removeFromArray = function(arr, ...someArg) {
    var newArr = []
    for (var i = 0; i < arr.length; i++)
        if(arr[i] === someArg) {
        arr.splice(i, 1);
        return arr;
        }
}

module.exports = removeFromArray
