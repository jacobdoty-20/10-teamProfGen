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
      let readMd = `# ${response.projectName}
      ## Description:
        ${response.describe}
      
        ## Table of Contents:
        Installation
        Usage
        Credits
        License

        ## Installation:
        ${response.installed}
      
        ## License:
        ${response.license}     

        ##  Contributing:
         ${response.contributors}

        ## Tests:
         ${response.tests}
      
        ## Notes:
        ${response.questions}`;

      fs.writeFile(`${response.projectName}` +".md", readMd, (err) => {
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
