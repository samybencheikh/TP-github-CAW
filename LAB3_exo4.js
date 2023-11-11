const fs = require('fs');



const textToWrite = process.argv[2];

fs.writeFile('f.txt', textToWrite, (err) => {
  if (err) {
    console.error(`Error writing to file: ${err}`);
    process.exit(1);
  }
  
  console.log('The file has been saved!');
});
