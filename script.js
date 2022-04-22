const {log, table, count} = console;

// ==============================
// Don't touch
// ==============================
Array.prototype.forEach = null;


// քո թույլտվությամբ ձևափոխել եմ
Array.prototype.map = function (callback){
    const result = [];
    const {length} = this
    for(let i=0; i<length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}
// const answer = [1,2,3,4,5].map(item => {
//     return Math.pow(item, 3);
// })
// log(answer)

Array.prototype.filter = function (callback){
    const result = [];
    const {length} = this
    for(let i=0; i<length; i++) {
        if(callback(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result;
}
// const answer = [1,2,3,4,5].filter(item => {
//     return item % 2 === 0;
// })
// log(answer)



// ==============================

// Implement these methods

Array.prototype.find = function (callback) {
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
};
// log([1,3,5,7,9,11,13].find(num => num > 4))

Array.prototype.findIndex = function (callback) {
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this)){
            return i;
        }
    }
    return -1;
};
// log([1,3,5,7,9,11,13].findIndex(num => num > 4))

Array.prototype.indexOf = function (search) {
    return this.findIndex(item => {
        return item === search
    })
};
log([1,3,5,7,9,11,13].indexOf(5))

Array.prototype.lastIndexOf = function (search, start = this.length - 1) {
    for(let i= start; i>-1; i--) {
        if(this[i] === search){
            return i;
        }
    }
    return -1;
};
// log([1,3,5,5,7,9,11,13,5].lastIndexOf(5, 4))


Array.prototype.some = function (callback) {
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i, this)){
            return true;
        }
    }
    return false;
};
// log([1,3,5,5,7,9,11,13,5].some(num => num > 40))


Array.prototype.every = function (callback) {
    for(let i=0; i<this.length; i++) {
        if(!callback(this[i], i, this)){
            return false;
        }
    }
    return true;
};
// log([1,3,5,5,7,9,11,13,5].every(num => num > 0))

Array.prototype.reduce = function (callback, aggr) {
    const {length} = this;
    if(length === 0) {
        throw new TypeError("Reduce of empty array with no initial value", "script.js", "67");
    }

    let i = 0;
    if(aggr === undefined){
        aggr = this[0]
        i=1;
    }

    for(i; i<length; i++) {
        aggr = callback(aggr, this[i])
    }

    return aggr;
};
// const answer = [1,2,3,4].reduce((a,b) => {
//     return a+b
// }, 1)
// log(answer)

Array.prototype.reduceRight = function (callback, aggr) {
    const {length} = this;
    if(length === 0) {
        throw new TypeError("Reduce of empty array with no initial value", "script.js", "67");
    }

    let i = length-1;
    if(aggr === undefined){
        aggr = this[length - 1]
        i=length - 2;
    }

    for(i; i>=0; i--) {
        aggr = callback(aggr, this[i])
    }

    return aggr;
};
// const answer = [1,2,3,4,5].reduceRight((a,b) => {
//     return a+b
// }, 1)
// log(answer)

Array.prototype.join = function (symbol="") {
    let resultText = "";
    for(let i=0; i<this.length; i++) {
        resultText += this[i] + (!this.isLastItem(i) ? symbol : "");
    }

    return resultText;
};
Array.prototype.isLastItem = function (step) {
    return this.length - 1 === step
}
// log(["A","r","a","r","a","t"].join("-"))

Array.prototype.pop = function () {
    const {length} = this;

    let popItem = this[length-1];
    this.length = length - 1;

    return popItem;
};
// let arr = [10,20,30]
// log(arr.pop());
// log(arr);


Array.prototype.unshift = function (...nums) {
    const {length} = nums;

    for(let i= this.length-1; i> -1 + length; i--) {
        this[i+length] = this[i]
    }

    for(let i=0; i<length; i++){
        this[i] = nums[i]
    }

    return this.length
};
// let arr = []
// log(arr.unshift(10, 20));
// log(arr);



// Որոշեցի մյուսներն էլ անեմ
Array.prototype.shift = function () {
    const {length} = this;

    let shiftItem = this[0];

    for(let i=0; i<length; i++){
        this[i] = this[i+1];
    }

    this.length = length - 1;

    return shiftItem
};
// let arr = [10,20,30,40,50,60,70,80]
// log(arr.shift());
// log(arr);


Array.prototype.push = function (...nums) {
    const {length} = nums;

    for(let i=0; i<length; i++){
        this[this.length] = nums[i];
    }

    return this.length
};
// let arr = [10,20,30,40,50,60,70,80]
// log(arr.push(90, 100));
// log(arr);
