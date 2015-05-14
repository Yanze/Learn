function min(arr, toReturn) {
    var smallest = arr[0];
    var index = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            index = i;
        }
    }
    if (toReturn === "index") {
        return index;
    } else {
        return smallest;
    }
}
