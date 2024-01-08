function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
}
  
function findPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
}
  
  const startRange = 1;
  const endRange = 100;
  const primeNumbers = findPrimesInRange(startRange, endRange);
  
  console.log(`Bilangan prima di antara ${startRange} dan ${endRange}: ${primeNumbers}`);
  