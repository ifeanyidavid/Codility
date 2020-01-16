function binaryGap(N) {
  let count = 0;
  let gapCounter = [];
  for (let i = 0; i < N.length; i++) {
    if (N[i] == 0) {
      count += 1;
    }

    if (N[i] != 0) {
      gapCounter.push(count);
      count = 0;
    }
  }

  console.log(gapCounter);
}

binaryGap("10001001");
