# 🧩 Task Management System (TDD-Based Full Stack Project)

This project demonstrates a **Test Driven Development (TDD)** approach to building a complete full stack **Task Management System** using **Ruby on Rails (API-only)** for the backend and **React + Vite** for the frontend.

---

## ⚙️ Tech Stack

**Backend:**
- Ruby on Rails (API-only)
- RSpec for backend testing
- SQLite3 (development) / PostgreSQL (production)
- Rack-CORS for cross-origin requests

**Frontend:**
- React + Vite
- Axios for API communication
- Jest + React Testing Library for unit and integration testing

---

## 🧱 Project Structure

taskflow_project/
│
├── backend/
│ ├── app/
│ ├── spec/ # RSpec tests
│ ├── config/
│ └── ...
│
└── frontend/
├── src/
├── tests/ # Jest component tests
├── vite.config.js
└── ...


---

## 🚀 Features

- Create, read, and update task entries  
- RESTful API communication between Rails and React  
- Backend and frontend testing environments integrated  
- Clean and modular architecture for maintainability  
- Full CORS-enabled API for smooth local development  

---

## 🧪 Testing

### 🧩 Backend (RSpec)
To run backend tests:
```bash
cd backend
bundle exec rspec

💻 Frontend (Jest)

To run frontend tests:

cd frontend
npm test


All tests should pass ✅
TDD methodology ensures that every feature is validated before implementation.

🧠 Learning Outcomes

Applying Test Driven Development (TDD) in full stack development

Structuring a scalable and testable architecture

Integrating backend and frontend test suites

Writing clean, maintainable, and reliable code

Building API-client communication in a test-first workflow

🧩 Example Endpoints (Rails API)
GET    /tasks          # Fetch all tasks
POST   /tasks          # Create a new task
PATCH  /tasks/:id      # Update a task
DELETE /tasks/:id      # Delete a task


Sample JSON Response:

{
  "id": 1,
  "title": "Complete TDD module",
  "status": "in_progress"
}

🧰 Setup Instructions
Backend Setup
cd backend
bundle install
rails db:create db:migrate
rails s

Frontend Setup
cd frontend
npm install
npm run dev


Open the app at:
👉 http://localhost:5173
