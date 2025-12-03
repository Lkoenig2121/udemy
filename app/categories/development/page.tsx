import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DevelopmentPage() {
  const topics = [
    { name: 'Web Development', icon: '🌐', courses: 15000 },
    { name: 'Mobile Development', icon: '📱', courses: 8500 },
    { name: 'Programming Languages', icon: '💻', courses: 12000 },
    { name: 'Game Development', icon: '🎮', courses: 6000 },
    { name: 'Database Design', icon: '🗄️', courses: 4500 },
    { name: 'Software Testing', icon: '✅', courses: 3000 },
  ];

  const popularCourses = [
    'The Complete Web Development Bootcamp',
    'React - The Complete Guide',
    'Node.js, Express & MongoDB',
    'Python for Everybody',
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Development Courses</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Master programming, web development, mobile apps, and more. Build the skills to create software that powers the world.
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link
                  key={topic.name}
                  href={`/courses?topic=${encodeURIComponent(topic.name)}`}
                  className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition group"
                >
                  <div className="text-4xl">{topic.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.courses.toLocaleString()} courses</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Learn Development */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why learn Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Demand</h3>
                <p className="text-gray-600">
                  Developers are among the most sought-after professionals worldwide, with competitive salaries and remote opportunities.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Problem Solving</h3>
                <p className="text-gray-600">
                  Turn ideas into reality by building applications, websites, and software that solve real-world problems.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Future-Proof Career</h3>
                <p className="text-gray-600">
                  Technology continues to grow, ensuring long-term career stability and continuous learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Development courses</h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
              <ul className="space-y-3">
                {popularCourses.map((course) => (
                  <li key={course} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{course}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/courses?category=Software Engineering"
                className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
              >
                Explore All Development Courses
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Start your development journey today</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join millions of learners building their coding skills
            </p>
            <Link
              href="/courses?category=Software Engineering"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
            >
              Browse Development Courses
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

