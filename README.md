# gopher-backend
This is backend of our school project. Purpose of this backend is to fetch data from our database. It uses Node.js, express, and mongoDB(Running on MLab).
# Running
Make sure you've got installed to followed:
* [MongoDB](https://docs.mongodb.com/manual/installation/)
* [Node.JS + npm](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

  Start your mongodb service
  ```
    sudo service mongod start
   ```
    
  then start mongo
  ```
    mongo
  ```
  
  Open new terminal and clone this repository
  ```
    git clone https://github.com/Gopher2k18/gopher-backend.git
  ```
  Go to gopher-backend folder and Install dependencies
  ```
  npm install
  ```
  Run
  ```
    nodemon i
  ```
  If all of that succeed you should see to follow text in your terminal
  
  ```
  "Server is listening on port 3000 
  Successfully connected to the database"
  ```
Also you should see "welcome" message when you open http://localhost:3000
