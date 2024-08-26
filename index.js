import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const app = express()

app.listen(8000, () => console.log("Apps is listenng at 8000"))



app.get('/', (req, res) => {

  const dateObject = new Date();

  const year = dateObject.getFullYear();
  const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
  const date = (`0 ${dateObject.getDate()}`).slice(-2);

  // current hours
  const hours = dateObject.getHours();

  // current minutes
  const minutes = dateObject.getMinutes();

  // current seconds
  const seconds = dateObject.getSeconds();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const FOLDER_PATH = path.join(__dirname, 'timestamps');

  if (!fs.existsSync(FOLDER_PATH)) {
    fs.mkdirSync(FOLDER_PATH, { recursive: true });
  }

  const timestamp = `Date: ${year}-${month}-${date} Time:${hours}-${minutes}-${seconds}`;
  const filename = `D${year}-${month}-${date}T${hours}-${minutes}-${seconds}.txt`;
  const filepath = path.join(FOLDER_PATH, filename);

  fs.writeFile(filepath, timestamp, (err) => {
    if (err) {

      return res.status(500).json({ message: `Error creating file`, error: err });
    }
    else {
      return res.status(200).json({ status: `File Created Successfully`, });
    }
  });


});
app.get('/get_files', (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const FOLDER_PATH = path.join(__dirname, 'timestamps');

  // After creating the file, list all text files in the folder
  fs.readdir(FOLDER_PATH, (err, files) => {

    if (err) {
      return res.status(500).json({ message: 'Error reading directory', error: err });
    }

    // Filter only .txt files
    const txtFiles = files.filter(file => path.extname(file) === '.txt');

    res.json({ message: 'File Fetch Successfull successfully', files: txtFiles});
  });
})



