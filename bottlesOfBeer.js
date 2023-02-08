function bottlesOfBeer(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer,");
        console.log("Take 1 down, pass it around, " + (i - 1) + " bottles of beer on the wall.")
    }
    console.log("No bottles of beer on the wall, no bottles of beer,");
    console.log("Go to the store, buy some more, " + n + " bottles of beer on the wall.");
}

bottlesOfBeer(10);
