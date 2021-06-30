function countPrimeNumbers() {
    let currentNumber = 2;
    let primes = [];
    while ( currentNumber <= 100 ) {
        let i = 1;
        let dividerCounter = 0;
        while (i <= currentNumber) {
            if (currentNumber % i == 0){
                dividerCounter += 1;
            }
            if (dividerCounter > 2) {
                break;
            }
            i++;
        }
        if (dividerCounter == 2) {
            primes.push(currentNumber)
        }
        currentNumber += 1;
    }
    return primes.length;
}

const t0 = performance.now();
setTimeout(function () {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
}, 1000)
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
