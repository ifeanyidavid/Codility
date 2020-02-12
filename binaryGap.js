function binaryGap(N) {
    let count = 0;
  let gapCounter = [];
  const binary = N.toString(2);
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) {
      count += 1;
    }

    if (binary[i] != 0) {
      gapCounter.push(count);
      count = 0;
    }
  }
  return Math.max.apply(null, gapCounter);
}

binaryGap("10001001");
