# 💬 Chat App MERN

A full-stack real-time chat application with 1-to-1 and group messaging, online presence, typing indicators, read receipts, image uploads, emoji reactions, privacy controls, and an admin moderation dashboard — built using the MERN stack and Socket.io.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-4-010101?style=flat-square&logo=socket.io" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  <a href="https://chat-app-mernn.netlify.app/">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#api-endpoints">API Documentation</a>
</p>

---

## 🚀 Features

- **Real-Time Messaging** — One-to-one and group conversations powered by Socket.io.
- **Online Presence** — Online/offline status with privacy controls.
- **Typing Indicators** — Real-time typing status with automatic timeout.
- **Read Receipts** — Delivered and read message indicators.
- **Image Sharing** — Image uploads using Cloudinary.
- **Emoji Reactions** — React to messages with emojis.
- **Message Management** — Edit and delete messages.
- **User Search** — Search users and start conversations.
- **Privacy Controls** — Block, mute, and archive conversations.
- **Group Chats** — Create groups, manage members, and assign admin roles.
- **Notifications** — Browser notifications and sound alerts.
- **Admin Dashboard** — User management, reporting, and moderation.
- **Themes & Accessibility** — Light/dark themes and appearance preferences.
- **Secure Authentication** — JWT authentication and bcrypt password hashing.

## 🌐 Live Demo

- **Frontend:** https://chat-app-mernn.netlify.app/
- **Backend API:** https://chat-app-mern-dm8x.onrender.com/
- **API Documentation:** https://chat-app-mern-dm8x.onrender.com/api-docs
- **Health Check:** https://chat-app-mern-dm8x.onrender.com/api/health

> The backend is hosted on Render and the frontend on Netlify. Free-tier cold starts may take a few seconds.

---

## 🛠️ Technologies Used

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- Socket.io Client
- Axios
- React Hot Toast
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JSON Web Token (JWT)
- bcryptjs
- Cloudinary
- Multer
- Helmet
- Express Rate Limit
- Swagger / OpenAPI

---

## ⚙️ Installation

### Prerequisites

Make sure you have installed:

- Node.js v18.18 or higher
- npm
- MongoDB Atlas account or local MongoDB
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/hrithik-roshan19/ChatApp.git
cd ChatApp
```

### 2. Configure Environment Variables

Create environment files from the example files:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

For Windows PowerShell:

```powershell
Copy-Item server/.env.example server/.env
Copy-Item client/.env.example client/.env
```

**Server `.env`**

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret_min_32_chars
JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

ADMIN_EMAIL=admin@example.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_strong_admin_password

MAX_UPLOAD_SIZE_MB=5
```

**Client `.env`**

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

**Important:** Never upload your `.env` files or expose database credentials, JWT secrets, or Cloudinary API secrets.

### 3. Install Dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 4. Seed the Admin Account

```bash
cd ../server
npm run seed:admin
```

### 5. Run the Application

Open two separate terminals.

**Terminal 1 — Backend**

```bash
cd server
npm run dev
```

**Terminal 2 — Frontend**

```bash
cd client
npm run dev
```

Open the application:

```text
http://localhost:5173
```

API documentation:

```text
http://localhost:5000/api-docs
```

---

## 📸 Screenshots

Screenshots are stored in the `assets/screenshots/` directory.

| Page | Preview |
|---|---|
| Landing Page | `assets/screenshots/landing.png` |
| Login | `assets/screenshots/login.png` |
| Register | `assets/screenshots/register.png` |
| Chat | `assets/screenshots/chat.png` |
| Light Theme | `assets/screenshots/chat-light.png` |
| Profile Settings | `assets/screenshots/settings-profile.png` |
| Privacy Settings | `assets/screenshots/settings-privacy.png` |

---

## 🏗️ Project Structure

```text
ChatApp/
├── client/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── utils/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── scripts/
│   ├── sockets/
│   ├── utils/
│   ├── validators/
│   └── index.js
│
├── assets/
│   └── screenshots/
│
├── docs/
├── .github/
├── LICENSE
└── README.md
```

---

## 🔐 Security

- JWT-based authentication.
- Password hashing using bcrypt.
- Protected API routes.
- Role-based admin authorization.
- CORS configuration.
- Helmet security headers.
- API rate limiting.
- Request validation and sanitization.
- MongoDB ObjectId validation.
- Secure image upload validation.
- Server-side authorization for conversations and messages.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/users/search?q=` | Search users |
| GET | `/api/conversations` | Get conversations |
| POST | `/api/conversations/direct` | Create direct conversation |
| POST | `/api/conversations/group` | Create group |
| GET | `/api/conversations/:id/messages` | Get messages |
| POST | `/api/conversations/:id/messages` | Send message |
| PATCH | `/api/messages/:id` | Edit message |
| DELETE | `/api/messages/:id` | Delete message |
| POST | `/api/messages/:id/reactions` | React to message |
| POST | `/api/upload/message-image` | Upload image |
| GET | `/api/notifications` | Get notifications |
| GET | `/api/admin/stats` | Admin statistics |

For the complete API reference, visit the Swagger documentation at `/api-docs`.

---

## 🔮 Future Improvements

- Voice and video calling using WebRTC.
- Voice messages.
- End-to-end encryption.
- File sharing for documents and videos.
- Message forwarding and pinning.
- Push notifications.
- Multi-language support.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push your branch.
6. Open a Pull Request.

---

## 👨‍💻 Maintainer

**Hrithik Roshan**

- 💻 GitHub: [@hrithik-roshan19](https://github.com/hrithik-roshan19)
- 💼 LinkedIn: [Hrithik Roshan](https://www.linkedin.com/in/hrithik-roshan-a55772333/)

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

⭐ If you find this project useful, consider giving it a star!