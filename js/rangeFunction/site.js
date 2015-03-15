function range(start, end, step) {
    if (!step) step = 1;
    if (start < end) {
        var numbers = [];
        for (i = start; i <= end; i+=step) {
            numbers.push(i);
        }
        return numbers;
    } else if (start > end) {
        var numbers = [];
        for (i = start; i >= end; i-=step) {
            numbers.push(i);
        }
        return numbers;
    }

};

console.log(range(5, 1, 2));
