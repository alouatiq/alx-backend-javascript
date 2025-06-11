process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\r`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
