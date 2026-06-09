# Student Attendance App 🎓

A containerized web application built with Node.js, Express, and MongoDB that allows students to mark attendance and view records.

## 📌 Lab Overview

This project was built to learn about containerization using Docker. It demonstrates how to build and run a multi-container application using Docker and Docker Compose.

## 🏗️ Architecture
Browser
|
v
+------------------+
| Node.js API      |
| Express          |
+------------------+
|
v
+------------------+
| MongoDB          |
+------------------+

## 🐳 Containers
- `app` — Node.js + Express API (port 5000)
- `mongodb` — MongoDB database (port 27017)

## 📚 Concepts Learned
- REST APIs
- JSON data format
- Environment variables
- Container networking
- Persistent volumes with Docker

## ✅ Features
- Add a student
- Mark attendance
- View attendance list

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker
- Docker Compose

## 🚀 Steps Undertaken

### 1. Project Setup
```bash
mkdir student-attendance-app
cd student-attendance-app
mkdir src models routes
npm init -y
npm install express mongoose dotenv cors
```
![image alt](https://github.com/reney001/student-attendance-app/blob/d2cef385a019dedd88f4af86925740739d33cb38/Snipaste_2026-06-09_10-23-05.png)

![image alt](https://github.com/reney001/student-attendance-app/blob/3bd685f9995677f0728f9cb0ee16f58e909091ef/Snipaste_2026-06-09_10-26-35.png)

![image alt](https://github.com/reney001/student-attendance-app/blob/d78956c1b856eb3cc6cbd06f8f390acf0a45e6c4/Snipaste_2026-06-09_10-26-41.png)

![image alt](https://github.com/reney001/student-attendance-app/blob/1099736d47db56485210b5c9dbe3d5b12eb354e5/Snipaste_2026-06-09_10-26-48.png)


## npm init -y output showing package.json created

![image alt](https://github.com/reney001/student-attendance-app/blob/dedc60695691549af31f2dcf82948be18b413731/Snipaste_2026-06-09_10-29-54.png)
### 2. Project Structure

student-attendance-app/
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── server.js
├── Dockerfile
├── docker-compose.yml
└── package.json

### 3. Dockerfile
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
```

### 4. Docker Compose
```yaml
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongodb:27017/attendancedb
      - PORT=5000
    depends_on:
      - mongodb

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### 5. Docker Commands Used
```bash
# Build and start containers
docker-compose up --build -d

# Check running containers
docker ps

# Stop containers
docker-compose down
```

### 6. API Testing Commands
```bash
# Add a student
curl -X POST http://localhost:5000/students/add -H "Content-Type: application/json" -d '{"name": "John Doe"}'

# View all students
curl http://localhost:5000/students/

# Mark attendance
curl -X PUT http://localhost:5000/students/attendance/<student_id>
```


