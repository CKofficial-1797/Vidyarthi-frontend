# 🎓 Vidyarthi – Online Learning Platform

**Vidyarthi** is a full-stack Learning Management System (LMS) that supports course creation, user roles (Admin, Instructor, Student), secure payments via Razorpay, media uploads, and email notifications — all wrapped in a responsive and modular UI.

> 🌐 Live: [vidyarthi-frontend.vercel.app](https://vidyarthi-frontend.vercel.app)  
> 💻 Frontend Repo: [Vidyarthi Frontend](https://github.com/CKofficial-1797/Vidyarthi-frontend.git)  
> 🔧 Backend Repo: [Vidyarthi Backend](https://github.com/CKofficial-1797/vidyarthi.git)

---

## 🚀 Features

- 🔐 **JWT Authentication & RBAC**: Secure login/signup for Student and Admin.
- 🎓 **Course Management**: Enrollments, progress tracking, and lifecycle management
- 💳 **Razorpay Integration**: Seamless and secure payment flow
- 📁 **Secure Media Upload**: Course media uploads using Multer
- 📧 **Email Notifications**: Real-time alerts using Nodemailer
- 📱 **Responsive UI**: Intuitive UX with toast alerts and route guards
- 📊 **Admin Dashboard**: Monitor users, instructors, and enrollments

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- React Router
- React Hot Toast

### Backend:
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, Multer, Nodemailer
- Razorpay Payments API

---

## 📦 Installation

### Clone both repositories

```bash
# Backend
git clone https://github.com/CKofficial-1797/vidyarthi.git
cd vidyarthi
npm install
npm run dev
```

```bash
# Frontend
git clone https://github.com/CKofficial-1797/Vidyarthi-frontend.git
cd Vidyarthi-frontend
npm install
npm start
```

---



## 🔐 Roles & Permissions

| Role        | Capabilities                             |
|-------------|------------------------------------------|
| **Admin** | Create and manage their own courses |
| **Student** | Enroll and access course content         |

---

## 💳 Payment Flow

- Secure checkout using **Razorpay**
- Backend verifies payment and updates course enrollment
- Email confirmation sent post-payment

---

## 📧 Email Notifications

- Registration confirmations  
- Enrollment confirmations  
- Admin alerts

---

## 📬 Contact

Built with ❤️ by [Chandrakant Gorain](https://www.linkedin.com/in/chandrakant-gorain-0201b6287)
