# 🛒Vidyarthi -- MERN E-Commerce & LMS Platform

A full-stack E-Commerce and Learning Management System (LMS) built using the MERN stack with modern architectural patterns, robust payment handling, and admin-level control. Designed to highlight scalable backend architecture, secure authentication, and real-time client experience .

---

## 🚀 Key Highlights

- 🔐 JWT-based Authentication with secure role-based access (RBAC)
- 📦 Dual-Module Architecture: E-Commerce for product orders and LMS for course enrollments
- 💳 Integrated Payments: Stripe for product checkout and Razorpay for courses (test mode ready)
- 📊 Admin Dashboard: CRUD operations on products, users, courses, and orders
- 🛠️ State Management: Redux Toolkit for cart, user, and order handling
- 📤 Media Uploads: Multer for secure file uploads (thumbnails/resources)
- ✉️ Communication: Nodemailer for email confirmations + React-toast for real-time feedback

---

## 🔧 Tech Stack

| Area        | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React.js, Redux Toolkit, Tailwind CSS  |
| Backend     | Node.js, Express.js                    |
| Database    | MongoDB (Mongoose ODM)                 |
| Auth        | JWT, Cookies                           |
| Payment     | Stripe, Razorpay (test mode)           |
| File Upload | Multer                                 |
| Emails      | Nodemailer                             |
| Alerts      | React-hot-toast                        |
| Deployment  | Vercel (Frontend), Render (Backend) |

---

## 🧩 Features (Detailed)

### ✅ User Features
- Register/Login with secure cookie-based sessions
- View products/courses with filters
- Add to cart / Enroll in course
- Pay securely via Stripe or Razorpay
- Track orders/enrollments

### 🔐 Admin Features
- Dashboard for managing:
  - ✅ Products
  - ✅ Courses
  - ✅ Orders
  - ✅ Users
- Edit/Delete/Update any entity
- Assign roles (admin/user)

### ⚙️ Architecture
- Modular MVC pattern
- RESTful APIs with consistent error handling
- Role-protected routes on both frontend/backend
- Redux slices per domain (auth/cart/order/notifications)

---

## 📁 Project Structure

```
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
├── frontend
│   ├── components
│   ├── pages
│   ├── redux
│   └── hooks
```

---

## 📈 Estimated Project Scale

- 💰 ~100+ simulated transactions processed during development and testing
- 🧾 Supports 5+ core user flows (login, cart, orders, dashboard, enrollments)
- ⚙️ Estimated 3K+ API interactions/day under typical usage across services
- 🛡️ Route protection implemented across all sensitive endpoints using JWT + RBAC


---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB instance (local or Atlas)
- Stripe and Razorpay test credentials

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/mern-ecommerce-lms.git

# Install backend
cd backend
npm install

# Install frontend
cd ../frontend
npm install
```

### Run Locally

```bash
# Start backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

---

## 📽 Demo & Links

- 🔗 Live Site:https://vidyarthi-frontend.vercel.app/
- 📹 Demo Video:https://drive.google.com/file/d/1wo1Ezn3BptT-XobruPkNafAJzXeuvZaF/view?usp=sharing
- 🗂 GitHub Repo:https://github.com/CKofficial-1797/Vidyarthi-frontend  (Frontend)
                 https://github.com/CKofficial-1797/vidyarthi.git (backend)

---

## 📌 License

This project is licensed under the MIT License.
