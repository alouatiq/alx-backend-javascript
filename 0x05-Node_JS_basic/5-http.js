const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      students.forEach((student) => {
        const [first, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(first);
      });

      const summary = [`Number of students: ${students.length}`];
      for (const [field, names] of Object.entries(fields)) {
        summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(summary);
    });
  });
}

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const dbFile = process.argv[2];
    countStudents(dbFile)
      .then((lines) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${lines.join('\n')}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
