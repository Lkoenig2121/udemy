import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BusinessPage() {
  const topics = [
    { name: 'Entrepreneurship', icon: '💡', courses: 8000 },
    { name: 'Communication', icon: '💬', courses: 6500 },
    { name: 'Management', icon: '👔', courses: 7000 },
    { name: 'Sales', icon: '📈', courses: 5500 },
    { name: 'Business Strategy', icon: '♟️', courses: 4000 },
    { name: 'Operations', icon: '⚙️', courses: 3500 },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Business Courses</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Learn business strategy, entrepreneurship, management, and leadership skills to advance your career and grow your business.
            </p>
          </div>
        </section>

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
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.courses.toLocaleString()} courses</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why learn Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advance Your Career</h3>
                <p className="text-gray-600">
                  Develop leadership and management skills to move into higher-level positions and increase your earning potential.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Your Own Business</h3>
                <p className="text-gray-600">
                  Learn entrepreneurship fundamentals to launch and grow your own successful business venture.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Universal Skills</h3>
                <p className="text-gray-600">
                  Business skills are valuable in every industry and help you succeed in any professional setting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <Link
              href="/courses?category=Entrepreneurship"
              className="block bg-blue-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Explore All Business Courses
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

