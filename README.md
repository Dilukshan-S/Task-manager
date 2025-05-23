        **Task Manager**

A simple full-stack task management app featuring:

Backend: Spring Boot + Spring Data JPA + H2 (file-based)

Frontend: React Admin (ra-data-simple-rest)

Features:
Create, Read, Update, Delete (CRUD) tasks

⚙️ Prerequisites
Java 17+

Maven (bundled via ./mvnw)

Node.js & npm (for frontend)

🚀 Getting Started
1. Backend Setup

  cd backend
  ./mvnw clean package
  ./mvnw spring-boot:run

API: http://localhost:8080/api/tasks

Web UI: http://localhost:8080/tasks

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:file:./data/taskdb

User: sa, leave password blank

Your backend will log CORS mappings and serve both HTML and JSON endpoints.

2. Frontend Setup

  cd frontend
  npm install
  npm start

Open: http://localhost:3000

The React Admin UI will fetch from http://localhost:8080/api/tasks

It uses the Content-Range header for pagination

📦 Building for Production

Backend

cd backend
./mvnw clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar

Frontend
cd frontend
npm run build

🔄 Development Workflow
Start backend on port 8080

Start frontend on port 3000

Backend auto-reloads on code changes via Spring DevTools (if enabled)

Frontend hot-reloads on component edits

🤝 Contributing
Pull requests welcome! Please:

Fork the repo

Create a feature branch

Submit PR against main with clear description
