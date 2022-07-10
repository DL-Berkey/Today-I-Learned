function fillArr(max) {
    return Array(max).fill().map((_, index) => index);
}

console.log(fillArr(100));