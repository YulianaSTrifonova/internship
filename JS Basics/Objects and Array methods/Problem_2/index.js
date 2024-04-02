Array.prototype.remove = function(value) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === value) {
            this.splice(i, 1);
        }
    }
    return this;
};

let arr = ["a", "b", "a", "n", "a", "d", "a"];
console.log(arr.remove("a"));
