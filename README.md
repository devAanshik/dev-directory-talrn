# Developer Directory App

A simple full-stack application for managing developer listings. Users can add developers, view all entries, and filter by role or tech stack. Built as part of the Talrn full-stack internship assessment.

## Features

### Core
- Add developer details: Name, Role, Tech Stack, Experience
- View list of developers
- Filter by role (Frontend / Backend / Full-Stack)
- Search by tech stack (case-insensitive)
- Basic form validation
- Toast notifications (success and error)
- Responsive layout

### Backend
- REST API using Express
- MongoDB storage (MongoDB Atlas)
- Endpoints for creating and retrieving developer records

### Frontend
- Functional React components
- Component-based architecture
- Form handling via react-hook-form
- Global modal visibility with Context
- API integration via axios
- Toasts via react-hot-toast

## Tech Stack

**Frontend**
- React (Vite)
- axios
- react-hook-form
- react-hot-toast
- Tailwind CSS

**Backend**
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- cors
- dotenv

## API Endpoints

### POST /developers
Creates a new developer entry.

**Request Body Example**
```json
{
  "name": "Alice",
  "role": "Full-Stack",
  "techStack": "React, Node, Tailwind",
  "experience": 2
}
```

### GET /developers
Returns all stored developers.

**Response Example**
```json
[
  { 
    "_id": "123",
    "name": "Alice",
    "role": "Full-Stack",
    "techStack": ["React", "Node", "Tailwind"],
    "experience": 2
  }
]
```

## Setup Instructions

### Backend Setup

1. cd backend
2. Install dependencies:
   npm install
3. Create .env:
   PORT=5000
   MONGO_URI=<your-mongo-connection-string>
4. Start server:
   npm run dev

Expected output:
MongoDB connected
Server running on port 5000

### Frontend Setup

1. cd frontend
2. Install dependencies:
   npm install
3. Create .env:
   VITE_API_URL=<your-backend-url>
4. Run dev server:
   npm run dev

Open http://localhost:5173 in browser.

## Deployment

### Backend
- Deployed on Render
- Added ENV variable: MONGO_URI

### Frontend
- Deployed on Vercel
- Set VITE_API_URL to the deployed backend URL

## Frontend Project Structure

src/
  api/
    developers.js
  components/
    AddDeveloperForm.jsx
    DeveloperFilters.jsx
    DeveloperList.jsx
    DeveloperCard.jsx
  context/
    FormContext.jsx
  hooks/
    useDevelopers.js
  App.jsx
  main.jsx

## Live Link

- The app is currently hosted on https://dev-directory-talrn.vercel.app
- Since the backend is hosted on the free version of render, it sleeps after every 15 minutes of inactivity. This leads to a nearly 50 second delay for the first request as the server restarts.
