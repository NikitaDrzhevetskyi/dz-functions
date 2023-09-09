'use strict';

function iterativeOddSumTo(number) {
	let sum = 0;
	for (let i = 0; i <= number; i++) {
	  if (i % 2 !== 0) {
		sum += i;
	  }
	}
	return sum;
  }
  
  console.log(iterativeOddSumTo(1));
  console.log(iterativeOddSumTo(9));
  console.log(iterativeOddSumTo(10));
  
  function recursiveOddSumTo(number) {
	if (number === 1) {
	  return 1;
	}
	if (number % 2 !== 0) {
	  return number + recursiveOddSumTo(number - 2);
	} else {
	  return recursiveOddSumTo(number - 1);
	}
  }
  
  console.log(recursiveOddSumTo(1));
  console.log(recursiveOddSumTo(9));
  console.log(recursiveOddSumTo(10));
  