function permutation(arr, selectNum) {
    let result = [];
    if(selectNum === 1) return arr.map((item) => [item]);

    arr.forEach((item, index, arr) => {
        const fixer = item;
        const restArr = arr.filter((_, idx) => idx !== index);
        const permutationArr = permutation(restArr, selectNum - 1);
        const combineFixer = permutationArr.map((item) => [fixer, ...item]);
        result.push(...combineFixer);
    });

    return result;
}

console.log(permutation(["a", "b", "c"], 2));