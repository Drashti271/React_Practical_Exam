# React Practical Exam Project

## 📌 Overview

This is a React-based application built using Vite. The project demonstrates a modular structure with features like authentication, blog management, and API integration.

---

## 🚀 Features

* User Authentication (Login)
* Blog Management (Add, View)
* Redux Toolkit for state management
* API handling using Axios
* Modular and scalable folder structure

---

## 📂 Project Structure

```
REACT_PRACTICAL_EXAM/
│── node_modules/
│── public/
│── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── app/
│   │   └── store.js
│   ├── assets/
│   ├── components/
│   │   └── Header.jsx
│   ├── features/
│   │   ├── blog/
│   │   │   └── blogSlice.js
│   │   └── user/
│   │       └── userSlice.js
│   ├── pages/
│   │   ├── AddBlog.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── ViewBlog.jsx
│   ├── App.jsx
│   └── main.jsx
│
│── db.json
│── index.html
│── package.json
│── vite.config.js
```

---

## Screenshot

<img width="1917" height="835" alt="image" src="https://github.com/user-attachments/assets/27185013-531d-46fb-8ec4-d1c68a44de04" />

## 🛠️ Technologies Used

* React
* Vite
* Redux Toolkit
* Axios
* JavaScript (ES6+)
* HTML5 & CSS3

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Navigate into the project folder:

```bash
cd REACT_PRACTICAL_EXAM
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

---

## 📡 API Setup (JSON Server)

This project uses a mock API with `db.json`.

Run the JSON server:

```bash
npx json-server --watch db.json --port 3000
```

---

## 📄 Available Pages

* **Home** – Displays blogs
* **Login** – User authentication
* **Add Blog** – Create new blog posts
* **View Blog** – View individual blog details

---

## 📌 Notes

* Ensure both Vite dev server and JSON server are running simultaneously.
* Update API base URL in `axiosInstance.js` if needed.

---

## 👨‍💻 Author

Drashti Bilimoria

---

## 📜 License

This project is for educational purposes only.
