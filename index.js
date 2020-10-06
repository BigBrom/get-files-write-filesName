const { readdirSync, appendFile } = require('fs');
const { resolve } = require('path');

// Get path to files directory
const dirPath = resolve(__dirname, 'YOUR PATH');

// Get an array of the files inside the folder
const files = readdirSync(dirPath);

// Loop through each file that was retrieved
files.forEach((file, i) => {
    // get the file name
    const str = file.replace(/\.[^/.]+$/, "") + '\n';
    const newFile = "YOUR FILENAME";
       
    // write the file
    appendFile(newFile, str, (err) => {
        if(error) throw error;
    });
});
