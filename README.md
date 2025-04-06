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

## 🗼️ Screenshots 

> Include images/GIFs of:
> - Home Page
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/a232fd09-63e1-4a20-8943-52c1a7439fab" />
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/d1aac904-a741-4fe6-a8a7-779c1a1cb212" />
> - Register
> - ![3rd](https://github.com/user-attachments/assets/c96956ec-8cd5-4b89-aa11-c64476f45faa)
> - ![4th](https://github.com/user-attachments/assets/fb377099-bf7d-4a4a-9dc4-7d9bc62c1fb1)
> - Cart and checkout flow
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/c46fc565-e292-4254-8b8d-576d96df0377" />
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/517d148f-7cea-468b-b47f-13f90a81ed4a" />
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/8a1cc554-bbaa-4b14-b658-e628820a5dc2" />



> - Admin dashboard overview
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/6c5d0bf7-767c-4f81-b5f1-274ac42f9693" />
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/9285f3ce-663f-46cc-9470-736c534ba8c4" />
> - <img width="960" alt="image" src="https://github.com/user-attachments/assets/99ff3326-5d0f-4ff5-bc83-bd241135d26c" /> 



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
npm run dev
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
API Docs	https://zomato-clone-mern.onrender.com (Thunder Client / Postman optional)

---

## 🙌 Acknowledgements

> Inspired by **Zomato** for educational & learning purposes.  
> Made with ❤️ by **Siddhesh** — the guy who codes harder than he trains arms 💪

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

