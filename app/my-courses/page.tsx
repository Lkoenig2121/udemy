'use client';

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function MyCoursesPage() {
  const { purchasedCourses } = useCart();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-4xl font-bold mb-2">My Learning</h1>
            <p className="text-lg text-purple-100">
              Access all your purchased courses in one place
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12">
          <div className="max-w-[1340px] mx-auto px-6">
            {purchasedCourses.length === 0 ? (
              <div className="text-center py-20">
                <svg
                  className="w-32 h-32 text-gray-300 mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  You haven't purchased any courses yet
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Start learning today! Browse our course catalog and find the perfect course for you.
                </p>
                <Link
                  href="/courses"
                  className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                >
                  Browse Courses
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    My Courses
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {purchasedCourses.length} {purchasedCourses.length === 1 ? 'course' : 'courses'} purchased
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {purchasedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
                    >
                      <div className="relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Purchased
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>
                        
                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-600">Your progress</span>
                            <span className="text-purple-600 font-semibold">0%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: '0%' }}
                            ></div>
                          </div>
                        </div>

                        <button className="w-full py-2.5 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition">
                          Start Learning
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Continue Learning Section */}
        {purchasedCourses.length > 0 && (
          <section className="py-12 bg-white">
            <div className="max-w-[1340px] mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to learn more?
              </h2>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                <span>Browse More Courses</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
