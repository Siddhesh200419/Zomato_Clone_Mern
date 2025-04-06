# 🍽️ Zomato Clone – MERN Stack

A full-fledged **Zomato Clone** built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It offers seamless **food ordering**, **delivery tracking**, and a powerful **admin dashboard** to manage operations end-to-end.

---

## 🗭 Directory Structure

```
Zomato_Clone_MERN/
├── backend     # Express.js server with MongoDB integration & REST APIs
├── frontend    # React app for users to browse, order, and track food
└── admin       # React-based dashboard for admins to manage the platform
```

---

## 🚀 Key Features

### 👑 Admin Panel (`/admin`)
- 🍽️ Add, edit & delete food items
- 🏢 Manage restaurants, menus & categories
- 🚚 Control delivery areas, charges & options
- 🔐 Secure login/logout for admin access

### 😋 User Interface (`/frontend`)
- 🔎 Browse restaurants & filter by food categories
- 🖼️ View food details with images, ratings & prices
- 🛒 Add items to cart, checkout, and track orders
- 👤 User authentication & personal order history

### ⚙️ Backend API (`/backend`)
- 🔌 Node.js + Express.js RESTful APIs
- ☁️ MongoDB Atlas for cloud-based data storage
- 🛡️ JWT-based authentication (User & Admin)
- 🧑‍⚖️ Role-Based Access Control (RBAC) for secure routing

---

## 🧰 Tech Stack

| Category      | Tech Used                             |
|---------------|----------------------------------------|
| **Frontend**  | React.js, TailwindCSS / Bootstrap      |
| **Backend**   | Node.js, Express.js                    |
| **Database**  | MongoDB (Atlas)                        |
| **Auth**      | JWT, bcrypt                            |
| **Deployment**| Railway / Render / Vercel (your pick)  |

---

## 🗼️ Screenshots (Optional)

> Include images/GIFs of:
> - Homepage with restaurant listings  
> - Food details page  
> - Cart and checkout flow  
> - Admin dashboard overview  

---

## 🏁 Getting Started

### 📦 Clone & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/Zomato_Clone_MERN.git
cd Zomato_Clone_MERN
```

### 🔧 Backend Setup
```bash
cd backend
npm install
npm run server
```

### 🎨 Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 🛠️ Admin Dashboard Setup
```bash
cd ../admin
npm install
npm start
```

> ✅ **Note**: Don’t forget to add your environment variables in `backend/.env`:
```ini
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

🌐 Live Demo
Platform	Link
Frontend App	https://zomato-clone-mern-frontend.onrender.com
Admin Dashboard	https://zomato-clone-mern-admin.onrender.com
API Docs	https://zomato-clone-mern.onrender.com (Swagger/Postman optional)

---

## 🙌 Acknowledgements

> Inspired by **Zomato** for educational & learning purposes.  
> Made with ❤️ by **Siddhesh** — the guy who codes harder than he trains arms 💪

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

