const fs = require('fs');

// Step 1: Read the file
fs.readFile('misraj3i.txt', 'utf8', (err, data) => {
  if (err) throw err;

  // Step 2: Count words
  const wordCount = data.trim().split(/\s+/).length;

  // Step 3: Write result to new file
  fs.writeFile('output.txt', `Word count: ${wordCount}`, (err) => {
    if (err) throw err;
    console.log('Word count written to output.txt');
  });
});
