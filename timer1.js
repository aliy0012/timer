const input = process.argv.slice(2);
let delay = 100;

input.sort();
input.forEach(element => {
  if (element < 0 || isNaN(element)){
    process.exit(1);
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, element * delay);
});
