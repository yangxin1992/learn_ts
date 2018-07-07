var getCounter = function () {
    var counter = function (start) {
        this.start = start;
    };
    counter.interval = 100;
    counter.reset = function () {
        console.log('1212121');
    };
    return counter;
};
var c = getCounter();
c(10);
console.log(c.interval);
c.reset();
console.dir(c);
