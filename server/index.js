const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const route = require('./route/user.route');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', route);

app.get('/health', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.send("✅ Database connected");
  } else {
    res.status(500).send("❌ Database not connected");
  }
});

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

//CROS
app.use(cors({
  origin: [
    "https://bus-ticket-booking-platform.vercel.app/" // deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

