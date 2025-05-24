A simple full-stack task management app featuring:

Backend: Spring Boot + Spring Data JPA + H2 (file-based)
Frontend: React Admin (ra-data-simple-rest)

✅ Features
Create, Read, Update, Delete (CRUD) tasks

Responsive UI using React Admin

RESTful API with file-based H2 storage

⚙️ Prerequisites
Java 17 or higher

Maven (comes bundled via ./mvnw)

Node.js & npm (for frontend development)

🚀 Getting Started
1. Backend Setup
Navigate to the backend directory and run:

cd backend
./mvnw clean package
./mvnw spring-boot:run

Once started, you'll have access to:

API: http://localhost:8080/api/tasks

Web UI (only after production build): http://localhost:8080

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:file:./data/taskdb
User: sa
Password: (leave blank)

2. Frontend Setup (Development Only)
If you want to run the frontend separately with hot reloading during development:

cd frontend
npm install
npm start

This starts the React Admin UI at:

http://localhost:3000

It connects to the backend API at http://localhost:8080/api/tasks and supports pagination using the Content-Range header.

Note: During development, both the backend and frontend must be run separately.

📦 Building for Production
Step 1: Build the Frontend
cd frontend
npm run build

This generates a production-ready version in the frontend/build folder.

Step 2: Copy Frontend Build to Backend Static Resources
Copy the contents of the frontend build directory into the backend’s static resources folder:

cp -r frontend/build/* backend/src/main/resources/static/

This allows Spring Boot to serve the frontend directly.

Step 3: Build and Run Backend Only
cd backend
./mvnw clean package
java -jar target/demo-0.0.1-SNAPSHOT.jar

Now, the complete application (both backend and frontend) will be available at:

http://localhost:8080

Note: In production, only the backend needs to be started.

🔄 Development Workflow
Component: Backend
Command: ./mvnw spring-boot:run
Port: 8080
Auto Reload: Yes (with Spring DevTools)

Component: Frontend
Command: npm start (inside frontend directory)
Port: 3000
Auto Reload: Yes (React hot reload)

🤝 Contributing
Pull requests are welcome!
To contribute:

Fork the repository

Create a new feature or fix branch

Submit a pull request against the main branch with a clear description