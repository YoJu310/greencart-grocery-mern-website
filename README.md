# 🛒 GreenCart – E-Commerce Grocery Store

 **GreenCart** is a modern full-stack grocery store application built with the **MERN stack**, featuring a user-friendly UI, an admin dashboard, category filtering, cart management, and two payment options: **online via Stripe** and **cash on delivery**.

🌐 **Live site**: [https://greencart-grocery-mern-website.vercel.app/](https://greencart-grocery-mern-website.vercel.app/)  
📦 **GitHub repository**: [https://github.com/YoJu310/greencart-grocery-mern-website](https://github.com/YoJu310/greencart-grocery-mern-website)

---

## 🚀 Features

- 🔐 User registration and login with JWT authentication
- 🛍️ Browse and filter products by category
- 🔍 Product search functionality
- 🛒 Add/remove items from the cart
- 📦 Place orders and View order summary
- 🗃 View past orders in "My Orders"
- 💳 Two payment methods: **Stripe** (online) or **Cash on Delivery**
- 📦 Seller dashboard for order and product management (WIP/future scope)
- ☁️ Image upload with **Cloudinary**


## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Axios, React Router DOM  
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Payment gateway**: Stripe API (with webhook support)
- **Security**: bcrypt (password encryption)
- **Deployment**: Vercel (frontend), Render/Local (backend) 


## ⚙️ Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v14.x or above)
- MongoDB (local instance or Atlas)
- Cloudinary account for image storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YoJu310/greencart-grocery-mern-website.git
   cd greencart-grocery-mern-website
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `/client` directory and include the following:

   ```env
   VITE_CURRENCY = '$'
   VITE_BACKEND_URL = "http://localhost:4000"
   ```
   
   Create a `.env` file in the `/server` directory and include the following:

   ```env
   PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    NODE_ENV=development
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_secret
    STRIPE_PUBLISHABLE_KEY=your_stripe_publishabe_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    SELLER_EMAIL = seller@example.com
    SELLER_PASSWORD = seller12345 
   ```

4. Start the development servers:

   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend server
   cd client
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.


 ### 🧪 Testing Stripe Payments
- You must use a Stripe Business Account (India) and configure your keys properly.
- Use Stripe test card: 4242 4242 4242 4242 – Any future expiry date, any CVC.

 
## Contributions

Feel free to fork this repository and submit pull requests. All contributions are welcome!


## 👩‍💻 Author

Made with ❤️ by [Yojna Singh](https://github.com/YoJu310) 


