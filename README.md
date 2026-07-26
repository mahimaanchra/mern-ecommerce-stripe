✍️ Forever - Full-Stack MERN E-Commerce Platform
A dynamic, production-ready full-stack e-commerce store and management system built with React, Node.js, Express, MongoDB Atlas, and Tailwind CSS. This platform features full payment gateway integrations (Stripe & Razorpay), image hosting via Cloudinary, and a dedicated admin management dashboard.

🚀 Live Demos

<a href="https://mern-ecommerce-stripe-uonb-l8jinvfmk-mahima5681.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live_Storefront-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Storefront" />
</a>
<a href="https://mern-ecommerce-stripe-1lck-gvu0xbrm9-mahima5681.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Admin_Dashboard-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Admin Panel" />
</a>

🧭 Application Flow & Dynamic Navigation
The application intelligently separates user browsing from store administration with distinct application flows:

🛍️ Client Storefront
Public Views:

Home & Shop: Browse products, filter by category/sub-category, sort by price, and search items.

Login / Signup: Secure account creation and JWT authentication.

Authenticated Views:

Cart & Checkout: Persistent cart state synced across sessions with options for COD, Stripe, or Razorpay payments.

My Orders: Live order tracking showing real-time status updates from the admin team.

⚙️ Admin Dashboard
Protected Management Workspace:

Add Items: Upload new products with title, description, category, size variants, price, and multiple image uploads powered by Cloudinary.

List Items: View and manage catalog items with instant deletion capabilities.

Orders Panel: View all customer orders across the platform and update order states (Order Placed, Packing, Shipped, Delivered).

🛡️ Content Ownership & Authorization Rules
Guest Browsing: Unauthenticated users can view products and add items to their local cart state.

Protected Checkout & Orders: Users must be logged in with a valid JWT session to complete checkouts and access order history.

Admin Role Isolation: Restricted admin panel access verified via secret admin credentials and dedicated JWT middleware—preventing unauthorized user access to store management routes.

🛠️ Tech Stack
Frontend & Admin: React, Tailwind CSS, React Router DOM, React Toastify, Axios

Backend: Node.js, Express.js, JSON Web Tokens (JWT), Bcrypt, CORS

Database & Storage: MongoDB Atlas (Mongoose ORM), Cloudinary (Image Hosting)

Payment Gateways: Stripe API, Razorpay API

Bundler & Hosting: Vite, Vercel (Configured with serverless function rewrites for Express and SPA client-side routing)