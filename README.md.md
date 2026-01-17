# 🏨 Hotel Booking Platform (MERN Stack)

🚀 A full-stack hotel booking web application designed to solve real-world booking and availability problems using the MERN stack.


---

## ✨ Key Features
- User authentication & authorization (JWT)
- Hotel search with filters (location, price, availability)
- Real-time room availability checking
- Secure hotel booking flow
- User booking history management

---

## 🛠️ Tech Stack 
**Frontend:** React , Redux Toolkit, React Router DOM 6, Axios, date-fns  
**Backend:** Node.js , Express , Mongoose , JWT, bcryptjs  
**Database:** MongoDB Atlas, Indexed collections, Aggregation pipeline  
**Services:** Cloudinary (images), Nodemailer (emails), Winston (logging)  
**DevOps:** Git, GitHub Actions, Vercel, Render, Postman

---

## 🔧 Technical Implementation Highlights
- **Real-time Availability:** MongoDB date range queries prevent double bookings
- **Authentication:** JWT with refresh token rotation & secure HTTP-only cookies
- **Search Optimization:** Text indexes + geospatial queries for location-based search
- **Image Handling:** Cloudinary CDN with automatic format optimization (WebP)


## 📁 Project Structure
```text
hotel-booking-platform/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Navbar, Footer, HotelCard, SearchBar
│   │   ├── pages/         # Home, Hotels, Booking, Dashboard, Auth
│   │   ├── context/       # AuthContext, BookingContext
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # API calls, helpers
│   │   └── App.js         # Main App component
│   └── public/            # Static assets
│
├── server/                 # Express Backend
│   ├── models/            # User, Hotel, Booking, Review
│   ├── routes/            # authRoutes, hotelRoutes, bookingRoutes
│   ├── controllers/       # Business logic
│   ├── middleware/        # auth, error, validation
│   ├── config/           # Database, cloudinary, email config
│   └── server.js         # Entry point
│
├── .env.example           # Environment template
├── package.json          # Root dependencies
└── README.md            # Documentation
