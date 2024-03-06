const fs = require("fs");

const readFileAsync = () => {
  return new Promise((resolve, reject) => {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        // Reject the promise if there's an error
        reject(err);
      } else {
        // Resolve the promise with the file data if successful
        resolve(data);
      }
    });
  });
};

/// working with async code 
const readFileAsync_v2 = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync("file.txt", "utf8");
      console.log("before resolving");
      resolve(data);
      console.log("after resolving");
    } catch (error) {
      reject(error);
    }

    // fs.readFile(filePath, 'utf8', (err, data) => {
    //     if (err) {
    //         reject(err);
    //     } else {
    //         resolve(data);
    //     }
    // });
  });
};

// Example usage of readFileAsync
const filePathAsync = "file.txt";
console.log("before");

readFileAsync(filePathAsync)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("after");
