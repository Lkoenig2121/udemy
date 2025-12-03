'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  category: string;
  image: string;
  bestseller: boolean;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, isInCart, isPurchased } = useCart();
  const router = useRouter();

  const categories = ['All', 'Software Engineering', 'Graphic Design', 'Entrepreneurship'];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/courses');
      const data = await response.json();
      setCourses(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.category === category));
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">All Courses</h1>
            <p className="text-lg text-gray-300">
              Choose from thousands of courses with new additions published every month
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-gray-200">
          <div className="max-w-[1340px] mx-auto px-6 py-6">
            <div className="flex items-center gap-4">
              <h2 className="font-semibold text-lg">Filter by:</h2>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => filterByCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'All' ? 'All Courses' : selectedCategory}
              </h2>
              <p className="text-gray-600 mt-1">{filteredCourses.length} courses</p>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer h-full"
                  >
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      {course.bestseller && (
                        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">
                          Bestseller
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          <span className="font-bold text-gray-900 mr-1">{course.rating}</span>
                          <div className="flex text-yellow-500">
                            {'★'.repeat(Math.floor(course.rating))}
                            {'☆'.repeat(5 - Math.floor(course.rating))}
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">
                          ({course.reviews.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-gray-900">${course.price}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      </div>
                      {isPurchased(course.id) ? (
                        <button
                          onClick={() => router.push('/my-courses')}
                          className="w-full mt-auto py-2 font-semibold rounded transition bg-green-600 text-white hover:bg-green-700"
                        >
                          Go to Course
                        </button>
                      ) : (
                        <button
                          onClick={() => addToCart(course)}
                          disabled={isInCart(course.id)}
                          className={`w-full mt-auto py-2 font-semibold rounded transition ${
                            isInCart(course.id)
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                        >
                          {isInCart(course.id) ? 'In Cart' : 'Add to Cart'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredCourses.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No courses found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div
                onClick={() => filterByCategory('Software Engineering')}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-bold text-gray-900 mb-1">Software Engineering</h3>
                <p className="text-sm text-gray-600">
                  {courses.filter((c) => c.category === 'Software Engineering').length} courses
                </p>
              </div>
              <div
                onClick={() => filterByCategory('Graphic Design')}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold text-gray-900 mb-1">Graphic Design</h3>
                <p className="text-sm text-gray-600">
                  {courses.filter((c) => c.category === 'Graphic Design').length} courses
                </p>
              </div>
              <div
                onClick={() => filterByCategory('Entrepreneurship')}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="text-4xl mb-3">💼</div>
                <h3 className="font-bold text-gray-900 mb-1">Entrepreneurship</h3>
                <p className="text-sm text-gray-600">
                  {courses.filter((c) => c.category === 'Entrepreneurship').length} courses
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-gray-900 mb-1">Mobile Development</h3>
                <p className="text-sm text-gray-600">Coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

