# Quick-Techie
 <img src="https://img.shields.io/badge/License-MIT License-blue">

## Description

A wordpress clone that allows usders to make blog posts and comment on others blog posts. Users are also able to edit their blog posts after submission and delete comments on their own blog posts as well as delte their own blog post at a later time should they choose. Users are stored in a mySQL database with password encrpytion.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

Step 1: Clone the repo and run ```npm install``` or ```yarn``` to install the dependencies. 

Step 2 is to make an .env file in the root of the repo. Copy and past what is below into the .env file and make changes to everything but leave DB_NAME alone: 
``` 
SESSION_SECRET='YOUR SESSION SECRET HERE' 
COOKIE_AGE_MINUTES='5' # HOW MANY MINUTES BEFORE THE COOKIE EXPIRES 
DB_NAME='quick_techie_db' # THIS MUST BE NAMED quick_techie_db! 
DB_USER='YOUR MYSQL USERNAME HERE' 
DB_PW='YOUR MYSQL PASSWORD HERE'
```  

To complete setup open your mySQL terminal and run ```$ source db/schema.sql```.


## Usage

TODO


## Credits

bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, morgan, mysql2, sequelize

## License


MIT License

Copyright (c) 2022 Ryan Moon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Features

* create user accounts
* create blog posts



## Contributing

If you wish to contribute please fork this repo and make a pull request and state what features you are try to add to the project


## Tests

run **npm test** to run tests

## Questions

Find me on github here: [here](http://github.com/moonryc)

If you have any additional question feel free to email me at [rycmoon@gmail.com](mailto:rycmoon@gmail.com)
