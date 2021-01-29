const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Describe your project.',
      name: 'describe',
    },
    {
      type: 'input',
      message: 'What did you install?',
      name: 'installed',
    },
    {
        type: 'input',
        default: 'Bootcamp',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        default: 'Anonymous',
        message: 'Contributors',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests did you run?',
        default: 'None',
        name: 'tests',
    },
    {
        type: 'input',
        default: 'None',
        message: 'Thoughts and/or questions',
        name: 'questions',
    }
  ])
  .then(response => 
    {
      let readMd = `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`;

      fs.writeFile(`${response.projectName}` +".html", html, (err) => {
        if(err){
          console.log(err);
        }
        else{
          console.log("created file");
        }
      })
    }
  );

function init() {}


init();
