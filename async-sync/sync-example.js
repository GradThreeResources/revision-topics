const fs = require('fs');

const filePathSync = 'file.txt';


console.log('before')

try {
    const data = fs.readFileSync(filePathSync, 'utf8');
    console.log('Sync File Content:', data);
} catch (error) {
    console.error('Sync Error Reading File:', error);
}

console.log('after')
