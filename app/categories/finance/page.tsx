import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function FinancePage() {
  const topics = [
    { name: 'Accounting & Bookkeeping', icon: '📊', courses: 5000 },
    { name: 'Finance Fundamentals', icon: '💰', courses: 4500 },
    { name: 'Investment Banking', icon: '🏦', courses: 2000 },
    { name: 'Cryptocurrency', icon: '₿', courses: 3500 },
    { name: 'Financial Analysis', icon: '📈', courses: 3000 },
    { name: 'Taxes', icon: '🧾', courses: 2500 },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Finance & Accounting Courses</h1>
            <p className="text-xl text-green-100 max-w-3xl">
              Master financial analysis, accounting principles, investing, and personal finance to manage money effectively.
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
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.courses.toLocaleString()} courses</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Build your financial expertise</h2>
            <Link
              href="/courses"
              className="inline-block mt-4 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg"
            >
              Browse Finance Courses
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

