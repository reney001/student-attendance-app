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

## ls && ls src/ showing all the  files and folders

![image alt](https://github.com/reney001/student-attendance-app/blob/ab4e34996f4d3157b8221e0adbf94b280ed74193/Snipaste_2026-06-09_19-32-52.png)

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
## cat Dockerfile showing the content

![image alt](https://github.com/reney001/student-attendance-app/blob/81a0d8110c003dc743ce7f8b8009e01f6a69f35d/Snipaste_2026-06-09_10-37-33.png)

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

## cat docker-compose.yml showing the content

![image alt](https://github.com/reney001/student-attendance-app/blob/30cc3b17c7eedf9ad8d0eef34ad8dbfbb9657831/Snipaste_2026-06-09_10-37-51.png)

### 5. Docker Commands Used
```bash
# Build and start containers
docker-compose up --build -d

# Check running containers
docker ps

# Stop containers
docker-compose down
```

## docker-compose up --build running and showing MongoDB Connected

![image alt](https://github.com/reney001/student-attendance-app/blob/11ea42d83be5cf5bd2f4465a04f0ba6aa1586285/Snipaste_2026-06-09_11-05-51.png)


### 6. API Testing Commands
```bash
# Add a student
curl -X POST http://localhost:5000/students/add -H "Content-Type: application/json" -d '{"name": "John Doe"}'

# View all students
curl http://localhost:5000/students/

# Mark attendance
curl -X PUT http://localhost:5000/students/attendance/<student_id>
```
## adding student John Doe and getting the JSON response

![image alt](https://github.com/reney001/student-attendance-app/blob/43c4d3d53ce7f1602bd1d79adc0e62ee1244ac0c/Snipaste_2026-06-09_11-33-42.png)

## curl http://localhost:5000/students/ showing the list

![image alt](https://github.com/reney001/student-attendance-app/blob/de89f12bfba6f88e6f0367ce94515b1df2fe1670/Snipaste_2026-06-09_11-34-18.png)


##  marking attendance showing attendance: 1

![image alt](https://github.com/reney001/student-attendance-app/blob/57aad46c04b20e93848f77fa2acd28064d7ada29/Snipaste_2026-06-09_11-34-36.png)
