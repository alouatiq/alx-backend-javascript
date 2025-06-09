const express = require('express');
const fs = require('fs');

const app = express();

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

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  countStudents(dbFile)
    .then((lines) => {
      res.set('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${lines.join('\n')}`);
    })
    .catch(() => {
      res.status(500).send('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
