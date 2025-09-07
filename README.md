# Fullstack Bookstore App

> A React & Node.js fullstack application for browsing free and paid books.

---

## Features

* Browse **free books** without logging in.
* Access **paid books** after Signup/Login.
* User authentication with persistent login using `localStorage`.
* Protected routes for paid content.
* Logout functionality.
* Toast notifications for success/error messages.
* Responsive UI with Tailwind CSS.

---

## Tech Stack

* **Frontend:** React.js, React Router DOM, React Hook Form, Tailwind CSS
* **Backend:** Node.js, Express.js, MongoDB (optional)
* **HTTP Requests:** Axios
* **Notifications:** React Hot Toast

---

## Installation

1. Clone the repository:

```
git clone https://github.com/username/fullstack-bookstore-App.git
```

2. Navigate into the project folder:

```
cd fullstack-bookstore-App
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Browse **free books** on the Home page.
2. Sign up or log in to access **paid books**.
3. Logout to clear session and return to free book access.

---

## Folder Structure

```
bookstore-app/
├── public/
├── src/
│   ├── components/    # Login, Logout, Signup, BookCard, etc.
│   ├── context/       # AuthContext and AuthProvider
│   ├── Home/          # Home page components
│   ├── App.jsx        # Main app with routing
│   └── index.js       # Entry point
├── package.json
└── README.md
```

---

## Screenshots / Demo

*(Add screenshots here later)*

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

