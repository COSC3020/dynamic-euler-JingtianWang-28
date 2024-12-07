function e(n) {
    let factorial = 1; 
    let sum = 1; 

    for (let i = 1; i <= n; i++) {
        factorial *= i; 
        sum += 1.0 / factorial; 
    }

    return sum;
}

