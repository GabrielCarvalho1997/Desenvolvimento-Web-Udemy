function max(x,y) {
    if ( x > y) {
        return x;
    }
        return y;
}

console.log(max(10,2));

const max2 = (x, y) => x > y ? x : y;
console.log(max2(100,5));