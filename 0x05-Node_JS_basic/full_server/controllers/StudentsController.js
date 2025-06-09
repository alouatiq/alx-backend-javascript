import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path)
      .then((data) => {
        const lines = ['This is the list of our students'];
        const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of fields) {
          const list = data[field];
          lines.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }

        res.status(200).send(lines.join('\n'));
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(path)
      .then((data) => {
        if (!data[major]) {
          res.status(200).send('List: ');
          return;
        }
        res.status(200).send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
