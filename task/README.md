# 🗂️ Task Planner App

# Introduction
A simple and interactive **Task Planner Web Application** built using **HTML, CSS, and Vanilla JavaScript**.
This app allows users to add tasks, mark them as completed, and move deleted tasks into a separate section for tracking.

## 📌 Project Overview

Task Planner is a mini task management system with three sections:

- 📝 Added Tasks
- ✅ Completed Tasks
- 🗑️ Deleted Tasks

It demonstrates DOM manipulation, event handling, and dynamic UI updates using pure JavaScript.

## 🚀 Features

- ➕ Add new tasks dynamically
- ✅ Mark tasks as completed using checkbox
- 🗑️ Delete tasks using delete button
- 📂 Automatic task movement between sections:
  - Added → Completed
  - Added → Deleted
- 🧹 Input validation (prevents empty tasks)
- 🎨 Clean board-style layout
- 📱 Responsive design (mobile-friendly)

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Layout and styling
- **JavaScript (ES6)** – Logic and dynamic behavior

## ⚙️ How It Works

### 1️⃣ Add Task
- User enters task in input field
- Clicks "ADD TASK"
- Task appears in **Added Task** column

### 2️⃣ Complete Task
- User checks the checkbox
- Task moves to **Completed Task** column
- Task is removed from Added column

### 3️⃣ Delete Task
- User clicks Delete button
- Task moves to **Deleted Task** column
- Removed from Added column


## 🧠 Core Logic Highlights

- Uses `createElement()` for dynamic task creation
- Uses `classList.add()` for styling
- Uses `addEventListener()` for:
  - Button click
  - Checkbox change
- Moves tasks between lists dynamically
- Prevents empty task submission using `trim()`


## 💡 What This Project Demonstrates

- Strong DOM manipulation skills
- Event-driven JavaScript
- Dynamic UI updates
- Conditional logic handling
- Clean separation of structure, style, and behavior
- Practical frontend state management (without frameworks)

## ▶️ How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
