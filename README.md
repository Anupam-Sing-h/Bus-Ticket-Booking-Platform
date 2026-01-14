# 🚌 Bus Ticket Booking Platform

A full‑stack MERN application for booking bus tickets online.  
This project demonstrates **secure backend flows, MongoDB Atlas integration, and a React + Vite frontend deployed on Vercel** with the backend running on Render.

---

## ✨ Features

- 🔐 **User Authentication** – Signup & Signin for passengers
- 🛠️ **Admin Panel** – Admin signup/signin and dashboard for managing buses
- 🚌 **Bus Management** – Add bus details, update seat availability
- 🎟️ **Ticket Booking** – Real‑time seat decrement and ticket generation
- 💳 **Payment Flow** – Integrated payment component (Stripe ready)
- 📊 **MongoDB Atlas** – Cloud database with collections for users, admins, and buses
- 🌐 **Deployment** – Backend on Render, frontend on Vercel

---

## 🏗️ Tech Stack

**Frontend**
- React + Vite
- React Router DOM
- TailwindCSS (optional styling)

**Backend**
- Node.js + Express
- MongoDB Atlas
- REST APIs
- CORS enabled

**Deployment**
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📂 Project Structure

Bus-Ticket-Booking-Platform/ ├── client/                # React + Vite frontend │   ├── src/ │   │   ├── components/    # Navbar, Payment, Ticket │   │   ├── pages/         # Home, About, Signup, Signin, AdminDashboard │   │   └── admin/         # AdminSignup, AdminSignin │   └── index.html ├── server/                # Express backend │   ├── controller/        # busdetail.auth.js, user, admin controllers │   ├── routes/            # API routes │   └── index.js           # Server entry point └── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Anupam-Sing-h/Bus-Ticket-Booking-Platform.git
cd Bus-Ticket-Booking-Platform
```
### 2. Backend Setup
```bash
cd server
npm install
```
### Create a .env file
```bash
PORT=8000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```
### Run locally:
```bash
npm start
```
### 3. Frontend Setup
```bash
cd client
npm install
```
### Create .env.development/production
```bash
VITE_API_BASE_URL=https://bus-ticket-backend.onrender.com
```
### Run locally:
```bash
npm run dev
npm run build
```

## 🚀 Deployment Links
### - Frontend (Vercel): [Bus Ticket Booking Platform](https://bus-ticket-booking-platform.vercel.app/)
### - Backend (Render): [https://bus-ticket-backend.onrender.com](https://bus-ticket-booking-platform.onrender.com)


