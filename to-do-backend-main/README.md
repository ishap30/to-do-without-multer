# 📝 Personal Todo API

A clean Express + MongoDB backend for personal task management with **priority levels** and **due dates**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` and set your MongoDB URI:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/my-todos
```

### 3. Run the server
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

---

## 📦 Todo Schema

| Field       | Type    | Values                   | Default    |
|-------------|---------|--------------------------|------------|
| `title`     | String  | any text                 | *required* |
| `completed` | Boolean | true / false             | false      |
| `priority`  | String  | "low" / "medium" / "high"| "medium"   |
| `dueDate`   | Date    | ISO 8601 date string     | null       |
| `createdAt` | Date    | auto                     | —          |
| `updatedAt` | Date    | auto                     | —          |

---

## 🔌 API Endpoints

### Get all todos
```
GET /todos
```
**Query params (all optional):**
- `priority=low|medium|high` — filter by priority
- `completed=true|false` — filter by status
- `sortBy=dueDate|priority|createdAt` — sort results

**Examples:**
```
GET /todos?priority=high
GET /todos?completed=false&sortBy=dueDate
GET /todos?sortBy=priority
```

---

### Get a single todo
```
GET /todos/:id
```

---

### Create a todo
```
POST /todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "priority": "high",
  "dueDate": "2025-05-01"
}
```

---

### Update a todo
```
PUT /todos/:id
Content-Type: application/json

{
  "title": "Buy groceries and cook",
  "priority": "medium",
  "dueDate": "2025-05-02",
  "completed": false
}
```
Only include the fields you want to change.

---

### Toggle completed status
```
PATCH /todos/:id/toggle
```
Quickly flips `completed` between true and false — no body needed.

---

### Delete a todo
```
DELETE /todos/:id
```

---

### Delete all completed todos
```
DELETE /todos/completed
```
Clears your done tasks in one shot.

---

## 🗂 Project Structure

```
├── server.js
├── .env.example
├── package.json
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   └── todoModel.js
    ├── controllers/
    │   └── todoController.js
    └── routes/
        └── todoRoutes.js
```
