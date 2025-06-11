process.stdout.write('Welcome to ALX, what is your name?\n');

let uname = '';

process.stdin.on('data', (data) => {
  uname = data.toString().trim();
  process.stdout.write(`Your name is: ${uname}\n`);
});

process.stdin.on('end', () => {
  if (!uname) {
    process.stdout.write('Your name is: \n');
  }
  process.stdout.write('This important software is now closing\n');
});
