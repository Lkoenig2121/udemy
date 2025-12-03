import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function OfficeProductivityPage() {
  const topics = [
    { name: 'Microsoft Office', icon: '📄', courses: 8000 },
    { name: 'Google Workspace', icon: '📧', courses: 3500 },
    { name: 'Excel', icon: '📊', courses: 6000 },
    { name: 'Data Entry', icon: '⌨️', courses: 2000 },
    { name: 'Productivity Tools', icon: '🛠️', courses: 4000 },
    { name: 'Time Management', icon: '⏰', courses: 3000 },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Office Productivity Courses</h1>
            <p className="text-xl text-orange-100 max-w-3xl">
              Master Microsoft Office, Google Workspace, productivity tools, and essential workplace skills.
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
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-600">{topic.courses.toLocaleString()} courses</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <Link
              href="/courses"
              className="block bg-orange-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
            >
              Explore All Office Productivity Courses
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

