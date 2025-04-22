# 0x03. ES6 Data Manipulation

## Description
This project focuses on practicing data manipulation in JavaScript using ES6 features such as `map`, `filter`, `reduce`, `Set`, `Map`, `WeakMap`, and typed arrays.

## Learning Objectives
By the end of this project, you should be able to:
- Use `map`, `filter`, and `reduce` on arrays
- Understand and use Typed Arrays
- Work with the `Set`, `Map`, and `WeakMap` data structures

## Requirements
- All code must run on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Use allowed editors: `vi`, `vim`, `emacs`, or `Visual Studio Code`
- Files must end with a new line
- A `README.md` file is mandatory
- Files must have a `.js` extension
- Code must pass Jest tests and ESLint checks using `npm run full-test`
- All functions must be exported

## Setup Instructions
### NodeJS 12.11.x Installation
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Check Versions
```bash
nodejs -v  # v12.11.1
npm -v     # 6.11.3
```

### Install Dependencies
In the project directory:
```bash
npm install
```

## Project Structure
```
0x03-ES6_data_manipulation/
├── 0-get_list_students.js
├── 1-get_list_student_ids.js
├── 2-get_students_by_loc.js
├── 3-get_ids_sum.js
├── 4-update_grade_by_city.js
├── 5-typed_arrays.js
├── 6-set.js
├── 7-has_array_values.js
├── 8-clean_set.js
├── 9-groceries_list.js
├── 10-update_uniq_items.js
├── 100-weak.js
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md
```

## Tasks Summary
| Task | File | Description |
|------|------|-------------|
| 0 | 0-get_list_students.js | Create a list of student objects |
| 1 | 1-get_list_student_ids.js | Get an array of student IDs |
| 2 | 2-get_students_by_loc.js | Filter students by location |
| 3 | 3-get_ids_sum.js | Reduce student IDs to a total sum |
| 4 | 4-update_grade_by_city.js | Update grades of students by city |
| 5 | 5-typed_arrays.js | Create a typed array with a given value at a specific position |
| 6 | 6-set.js | Convert an array to a Set |
| 7 | 7-has_array_values.js | Check if Set contains all elements of an array |
| 8 | 8-clean_set.js | Clean and format Set values based on a prefix |
| 9 | 9-groceries_list.js | Return a Map with grocery items |
| 10 | 10-update_uniq_items.js | Update quantity in Map if value is 1 |
| 11 | 100-weak.js | Track API usage with WeakMap and throw error on high load |

## Running Tests
To run tests:
```bash
npm run test
```
To run lint and tests together:
```bash
npm run full-test
```
