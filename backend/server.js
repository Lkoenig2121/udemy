const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5001;
const JWT_SECRET = 'udemy-clone-secret-key-2024';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory user storage (replace with database in production)
const users = [
  {
    id: 1,
    name: 'Demo User',
    email: 'demo@udemy.com',
    password: '$2b$10$AD6MdfmaROZehr.30bvHBeYMnx7vrQZrZiLgXU2wRS1my3tj3/Tem', // demo123
  },
];

let userIdCounter = 2;

// Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: userIdCounter++,
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    // Generate token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Protected route example
app.get('/api/user/profile', authenticateToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

// Courses data
const courses = [
  {
    id: 1,
    title: 'The Complete Web Development Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 382845,
    price: 12.99,
    originalPrice: 84.99,
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 2,
    title: 'Complete Python Developer Course',
    instructor: 'Jose Portilla',
    rating: 4.6,
    reviews: 156230,
    price: 12.99,
    originalPrice: 74.99,
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    bestseller: false,
  },
  {
    id: 3,
    title: 'Machine Learning A-Z',
    instructor: 'Kirill Eremenko',
    rating: 4.5,
    reviews: 178945,
    price: 12.99,
    originalPrice: 89.99,
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 4,
    title: 'Graphic Design Masterclass',
    instructor: 'Lindsay Marsh',
    rating: 4.6,
    reviews: 89234,
    price: 12.99,
    originalPrice: 79.99,
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=225&fit=crop',
    bestseller: false,
  },
  {
    id: 5,
    title: 'Adobe Illustrator CC - Advanced Training',
    instructor: 'Daniel Walter Scott',
    rating: 4.7,
    reviews: 45678,
    price: 12.99,
    originalPrice: 84.99,
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 6,
    title: 'Complete Blender Creator',
    instructor: 'Grant Abbitt',
    rating: 4.8,
    reviews: 67890,
    price: 12.99,
    originalPrice: 94.99,
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 7,
    title: 'Entrepreneurship Fundamentals',
    instructor: 'Chris Haroun',
    rating: 4.5,
    reviews: 34567,
    price: 12.99,
    originalPrice: 69.99,
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop',
    bestseller: false,
  },
  {
    id: 8,
    title: 'Business Strategy',
    instructor: 'Michael Porter',
    rating: 4.6,
    reviews: 23456,
    price: 12.99,
    originalPrice: 79.99,
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=225&fit=crop',
    bestseller: false,
  },
  {
    id: 9,
    title: 'The Complete Digital Marketing Course',
    instructor: 'Rob Percival',
    rating: 4.4,
    reviews: 98765,
    price: 12.99,
    originalPrice: 84.99,
    category: 'Entrepreneurship',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 10,
    title: 'React - The Complete Guide',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.7,
    reviews: 234567,
    price: 12.99,
    originalPrice: 89.99,
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 11,
    title: 'Node.js, Express & MongoDB Bootcamp',
    instructor: 'Jonas Schmedtmann',
    rating: 4.8,
    reviews: 145678,
    price: 12.99,
    originalPrice: 94.99,
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop',
    bestseller: true,
  },
  {
    id: 12,
    title: 'UI/UX Design Specialization',
    instructor: 'CalArts',
    rating: 4.6,
    reviews: 56789,
    price: 12.99,
    originalPrice: 79.99,
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=225&fit=crop',
    bestseller: false,
  },
];

// Get all courses
app.get('/api/courses', (req, res) => {
  const { category } = req.query;
  
  if (category) {
    const filteredCourses = courses.filter((c) => c.category === category);
    return res.json(filteredCourses);
  }
  
  res.json(courses);
});

// Get single course
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  
  res.json(course);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

