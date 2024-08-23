# 📚 CRUD Python + React Project

 This repository demonstrates how to build a full-stack application that integrates **React** on the frontend with a **Python Django** backend. The app showcases a basic CRUD (Create, Read, Update, Delete) functionality applied to a collection of books.
 
## 🚀 Project Overview

This project is designed to help you understand how to connect a **React** frontend with a **Django** + **Python** backend API using **RESTful principles**. The application allows users to:

- **Create** new books by providing a title and a release year.
- **Read** and display the list of books.
- **Update** the title of existing books.
- **Delete** books from the list.

The frontend is styled with **Tailwind CSS** and **SCSS**.

## 🛠️ Technologies Used

- **Frontend:**
  - 🟦 React
  - 🎨 Tailwind CSS
  - 💅 SCSS

- **Backend:**
  - 🐍 Python
  - 🦄 Django: A high-level Python web framework.
  - 🌐 Django REST Framework: A toolkit for building Web APIs in Django.

## 🎯 Key Features

- **API Integration:** The React frontend interacts with the Django backend via a REST API, showcasing how to handle basic asynchronous operations and state management in React.
- **CRUD Operations:** Python with the use of Django rest framework
- **Styling:** Tailwind using SCSS for iterating and variating book title colors.

## ⚙️ Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-django-tutorial.git
cd crud-python-react
```

### 2. Backend Setup (Django)

- Create a virtual environment and activate it:

  ```bash
  python -m venv venv
  source venv/bin/activate  # On Windows use `venvScriptsactivate`
  ```

- Install the necessary Python dependencies:

  ```bash
  pip install -r requirements.txt
  ```

- Run migrations and start the Django development server:

  ```bash
  python manage.py migrate
  python manage.py runserver
  ```
  
### 3. Frontend Setup (React)

- Navigate to the frontend directory:

  ```bash
  cd client/react-frontend
  ```

- Install the necessary Node.js dependencies:

  ```bash
  npm install
  ```

- Start the React development server:

  ```bash
  npm run dev
  ```

### 4. Access the Application

- Open your browser and go to `http://localhost:5173` to view the React frontend.
- The api created in Django should ne be running at `http://127.0.0.1:8000/api/books/` after the runserver command.

## 🧪 Testing the Application

You can test the CRUD functionality by adding, editing, and deleting books directly from the frontend. Each action will be reflected in real-time, with the backend handling data persistence via the Django REST API.
