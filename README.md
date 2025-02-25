Here’s a **README section** for your GitHub repository that explains how to run both the **JSON Server** and the **Node.js server**:  


### **Running the Project**

This project consists of two servers:  

1. A **mock API server** using `json-server`  
2. A **Node.js backend server**  

#### **Step 1: Install Dependencies**  
Before running the servers, make sure you have all dependencies installed:  

npm install


#### **Step 2: Start the JSON Server**  
To run the mock API server using `json-server`, execute the following command:  

npx json-server --watch db.json --port 5500

This will start a JSON-based REST API on **http://localhost:5500**.

#### **Step 3: Start the Node.js Server**  
In a separate terminal, start the Node.js backend server:  

node server.js

This will start the backend server, which interacts with the mock API.

#### **Step 4: Test the API**  
Once both servers are running, you can test the API using **Postman** or your browser:  
- JSON Server: [`http://localhost:5500`](http://localhost:5500)  
- Node Server: [`http://localhost:YOUR_PORT`](http://localhost:YOUR_PORT) (replace `YOUR_PORT` with the actual port from `server.js`)

