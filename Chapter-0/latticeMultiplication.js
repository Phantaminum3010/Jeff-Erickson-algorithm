function latticeMultiplication(X, Y) {
    let Z = [];
    let m = X.length;
    let n = Y.length;
    let carry = 0;
    for (let k = 0; k <= m + n - 2; k++) {
        let sum = 0;
        let i = 0;
        while (i <= k) {
            if (i <= m - 1 && k - i <= n - 1 && k - i >= 0) {
                sum += X[i]*Y[k - i];
            }
            i++;
        }
        sum += carry;
        let result = sum % 10;
        carry = (sum - result) / 10;
        Z.push(result);
    }
    Z.push(carry);
    return Z;
}

console.log(latticeMultiplication([2], [3]), 2*3);
console.log(latticeMultiplication([1,2], [3,4]), 21 * 43);
console.log(latticeMultiplication([1,2,8], [9,7]), 821 * 79);
