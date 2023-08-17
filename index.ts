import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exchangeRate = 1.15; // Example exchange rate: 1 USD to EUR

rl.question('Enter the amount in USD: ', (answer) => {
  const usdAmount = parseFloat(answer);
  if (!isNaN(usdAmount)) {
    const convertedAmount = usdAmount * exchangeRate;
    console.log(`${usdAmount} USD is equal to ${convertedAmount.toFixed(2)} EUR`);
  } else {
    console.log('Invalid input. Please enter a number.');
  }
  rl.close();
});
