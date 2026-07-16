# Align

Align is a MERN productivity dashboard for managing daily tasks with priorities, due dates, completion tracking, and a clean dashboard UI.

## Features

- Create, view, delete, and complete tasks
- Filter tasks by status and priority
- Track task priority with P1, P2, and P3 labels
- Store tasks in MongoDB through an Express API
- React dashboard with a shared task context and reusable task card component

## Tech Stack

- Frontend: React, Vite, React Router, Axios, Sass
- Backend: Node.js, Express, MongoDB, Mongoose

## Project Structure

```text
Align/
	Backend/
		server.js
		src/
			app.js
			config/
			controllers/
			middlewares/
			models/
			routes/
	Frontend/
		src/
			features/task/
				components/
				hooks/
				pages/
				services/
				styles/
				task.context.jsx
			App.jsx
			routes.jsx
```

## Prerequisites

- Node.js 18 or later
- MongoDB connection string

On this Windows setup, use `npm.cmd` in PowerShell if `npm` is blocked by execution policy.

## Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
```

If you want to point the frontend at a different API base URL, add a `.env` file in the frontend folder:

```env
VITE_API_URL=http://localhost:3000/api
```

## Installation

Install backend dependencies:

```bash
cd Backend
npm.cmd install
```

Install frontend dependencies:

```bash
cd ../Frontend
npm.cmd install
```

## Running the App

Start the backend server:

```bash
cd Backend
npm.cmd run dev
```

Start the frontend development server:

```bash
cd Frontend
npm.cmd run dev
```

## Available Scripts

### Backend

- `npm.cmd run dev` - start the Express server with nodemon

### Frontend

- `npm.cmd run dev` - start the Vite dev server
- `npm.cmd run build` - create a production build
- `npm.cmd run lint` - run ESLint
- `npm.cmd run preview` - preview the production build

## API Endpoints

Base URL: `/api/task`

- `GET /tasks` - fetch all tasks
- `POST /create` - create a task
- `PATCH /update/:id` - update a task, including completion state
- `DELETE /delete/:id` - delete a task

### Task Payload

```json
{
	"task_title": "Finish dashboard",
	"description": "Polish the task UI",
	"dueDate": "2026-07-16",
	"priority": "P1",
	"completed": false
}
```

## How It Works

The frontend stores task state in a React context. The dashboard loads tasks on mount, sends create and delete requests through a custom `useTask` hook, and renders each task with a reusable `Task` component.

When a checkbox is toggled, the hook sends a `PATCH` request to the backend to persist the `completed` value in MongoDB. The local context is then updated so the UI changes immediately.

## Notes

- Task filtering is client-side.
- Dashboard stats are currently hardcoded and can be made dynamic later.
- The app currently focuses on task management.
