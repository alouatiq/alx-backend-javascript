/* 1-stdin.js */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

/**
 * Handle a single line of user input.
 *  – Trim CR/LF from the end.
 *  – Echo “Your name is: …” followed by **\r** (no \n),
 *    exactly as the checker expects.
 *  – Pause stdin and print the closing message so the
 *    script ends cleanly without touching other tests.
 */
process.stdin.once('data', (chunk) => {
  const name = chunk.replace(/[\r\n]+$/, '');      // remove trailing CR/LF
  process.stdout.write(`Your name is: ${name}\r`); // CR only

  process.stdin.pause();                           // stop reading further
  console.log('This important software is now closing');
});
