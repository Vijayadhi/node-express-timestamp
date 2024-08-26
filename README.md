
---

# NodeJS File System API

This project demonstrates a simple Node.js application using Express to create and retrieve text files with timestamps. The files are stored in a timestamp folder on the server, and each request generates a new file with the current date and time.

## Features

1. **Create Timestamped Files**:  
   - When a `GET` request is made to the root endpoint (`/`), the server creates a text file in the `timestamps` directory.
   - The content of the file is the current timestamp in `Date: YYYY-MM-DD Time:HH-MM-SS` format.
   - The filename is also the current timestamp in the format `DYYYY-MM-DDTHH-MM-SS.txt`.
   - The word `D` in the filename denotes the Date and `T` denotes the time

2. **Retrieve All Timestamped Files**:  
   - When a `GET` request is made to the `/get_files` endpoint, the server returns a list of all `.txt` files in the `timestamps` directory.

## Project Structure

```
/project-directory
  ├── timestamps/          # Directory where the timestamped files are saved
  ├── server.js            # Main server file
  ├── package.json         # Dependencies and scripts
  ├── README.md            # Project documentation
```

## Testing
- You Can test and use  our API from the
   ```https://node-express-timestamp.onrender.com```


## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **Express**: The project uses Express.js for handling HTTP requests.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vijayadhi/nodejs-filesystem.git
   cd nodejs-file-system-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

   The server will be running on `http://localhost:8000`.

## API Endpoints

### 1. Create a Timestamped File

- **Endpoint**: `/`
- **Method**: `GET`
- **Description**: Creates a text file with the current timestamp as its content and filename in the `timestamps` directory.

- **Response Example**:
  ```json
  {
    "status": "File Created Successfully"
  }
  ```

### 2. Retrieve All Timestamped Files

- **Endpoint**: `/get_files`
- **Method**: `GET`
- **Description**: Lists all `.txt` files present in the `timestamps` directory.

- **Response Example**:
  ```json
  {
    "message": "File Fetch Successful",
    "files": [
      "D2024-08-26T12-30-45.txt",
      "D2024-08-26T12-32-20.txt"
    ]
  }
  ```

## Error Handling

- **File Creation Error**: If there is an error while creating the file, the server responds with a status of `500` and a JSON object containing the error message.
- **Directory Read Error**: If there is an error reading the directory when fetching files, the server responds with a status of `500` and a JSON object containing the error message.

## Contributing

Feel free to contribute to this project by submitting a pull request or opening an issue.

## License

This project is licensed under the MIT License.

---

