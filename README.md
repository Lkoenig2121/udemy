# Udemy Clone - Learning Platform

A full-stack e-learning platform built with Next.js, TypeScript, Tailwind CSS, Node.js, and Express.

## Features

- 🎨 Beautiful, modern UI inspired by Udemy
- 🔐 User authentication (Login/Signup)
- 📚 Course browsing with categories (Software Engineering, Graphic Design, Entrepreneurship)
- 🔍 Course filtering by category
- 🛒 **Full shopping cart system with purchase flow**
- 📖 **My Courses page showing all purchased courses**
- 🎯 Real-time cart updates and badge counters
- 💳 Complete checkout with success animations
- 👤 User profile management
- 📱 **Fully responsive design** (mobile, tablet, desktop)
- 🍔 Hamburger menu with navigation on mobile
- 🔔 Notification icons and user dropdown

## Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - State management

### Backend

- **Node.js** - Runtime environment
- **Express** - Web server framework
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   cd /Users/lukaskoenig/Documents/udemy/udemy-clone
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Running the Application

You need to run both the backend server and the frontend application:

1. **Start the backend server** (Terminal 1)

   ```bash
   cd backend
   npm start
   ```

   Backend will run on `http://localhost:5000`

2. **Start the frontend** (Terminal 2)

   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:3000`

3. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Demo Credentials

Use these credentials to test the login functionality:

- **Email**: `demo@udemy.com`
- **Password**: `demo123`

Or create a new account using the signup page.

## Project Structure

```
udemy-clone/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── courses/           # Courses browsing page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── ProtectedRoute.tsx # Route protection
├── lib/                   # Utility functions
│   └── auth.ts            # Authentication helpers
├── backend/               # Express backend
│   ├── server.js          # API server
│   └── package.json       # Backend dependencies
├── public/                # Static assets
└── README.md             # This file
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login with credentials
- `GET /api/user/profile` - Get user profile (protected)

### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses?category=Software Engineering` - Filter by category
- `GET /api/courses/:id` - Get single course

## Features Breakdown

### 1. Navigation Bar

- Logo and branding
- Search functionality
- Links: Explore, Plans & Pricing, Udemy Business, Teach on Udemy
- Shopping cart icon
- Login/Signup buttons (when logged out)
- User profile dropdown (when logged in)

### 2. Home Page

- Hero section with promotional banner
- Featured categories (AI, IT Certifications, Data Science)
- Course categories grid
- Featured topics by category

### 3. Authentication

- Login page with email/password
- Signup page with name, email, password
- JWT-based authentication
- Password hashing with bcryptjs
- Protected routes

### 4. Courses Page

- Course grid with images and details
- Category filtering
- Course cards with:
  - Course image
  - Title and instructor
  - Rating and reviews
  - Price (with discount)
  - "Add to Cart" button
  - Bestseller badge

### 5. User Profile

- View logged-in user information
- Access to "My Courses"
- Logout functionality

## Course Categories

1. **Software Engineering**

   - Web Development
   - Python Programming
   - Machine Learning
   - React
   - Node.js

2. **Graphic Design**

   - Adobe Illustrator
   - Blender 3D
   - UI/UX Design
   - Graphic Design Fundamentals

3. **Entrepreneurship**
   - Business Strategy
   - Digital Marketing
   - Entrepreneurship Fundamentals

## Customization

### Adding New Courses

Edit `backend/server.js` and add new courses to the `courses` array:

```javascript
{
  id: 13,
  title: 'Your Course Title',
  instructor: 'Instructor Name',
  rating: 4.5,
  reviews: 1000,
  price: 12.99,
  originalPrice: 84.99,
  category: 'Software Engineering',
  image: 'https://your-image-url.com',
  bestseller: true,
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme.

## Recent Updates

### Shopping Cart & Purchase System ✅

- Full cart sidebar with add/remove functionality
- Real-time cart count badge on navbar
- Cart persistence in localStorage
- Complete purchase flow with animations
- Success message and auto-redirect
- Fixed z-index for proper cart overlay display

### My Courses Dashboard ✅

- Dedicated page for purchased courses
- Beautiful purple gradient header
- Course cards with "Purchased" badges
- Progress tracking UI (0% initially)
- "Start Learning" buttons
- Empty state when no courses purchased
- Links from navbar and mobile menu

### Responsive Design ✅

- Mobile hamburger menu
- Cart icon visible on all screen sizes
- Tablet and mobile layouts
- Touch-friendly interface

## Future Enhancements

- [ ] Course detail pages with curriculum
- [ ] Payment integration (Stripe/PayPal)
- [ ] Video player for course content
- [ ] Active course progress tracking
- [ ] Reviews and ratings system
- [ ] Wishlist functionality
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Search functionality with autocomplete
- [ ] Admin dashboard for course management
- [ ] Email notifications
- [ ] Certificate generation

## License

This project is for educational purposes only.

## Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js and Express
