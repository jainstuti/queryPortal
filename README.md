# queryPortal

Demo video
https://youtu.be/O3xue4NQ-rk

Steps to run on local machine:
1. Clone the repo
2. Open the folder in which repo was cloned in a code editor 
3. Open integrated terminal of code editor
4. Run following commands:
cd backend
npm install
5. Create a database using Mongodb atlas and generate your connection string. Paste the connection string in .env file like so:
MONGO_URI="your_connection_string"
Replace <password> in your connection string with your database password
6. Run the following in the opened terminal to spin up the server
nodemon server.js
7. Open another integrated terminal and run following commands to:
cd frontend
npm install
npm start
