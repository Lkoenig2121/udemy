import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function HealthFitnessPage() {
  const topics = [
    { name: 'Fitness', icon: '💪', courses: 5000 },
    { name: 'Nutrition & Diet', icon: '🥗', courses: 4500 },
    { name: 'Yoga', icon: '🧘', courses: 4000 },
    { name: 'Mental Health', icon: '🧠', courses: 3500 },
    { name: 'Meditation', icon: '☮️', courses: 3000 },
    { name: 'Sports', icon: '⚽', courses: 2500 },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-lime-900 to-lime-700 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Health & Fitness Courses</h1>
            <p className="text-xl text-lime-100 max-w-3xl">
              Improve your physical and mental health with courses on fitness, nutrition, yoga, meditation, and wellness.
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
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-lime-600 transition mb-1">
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
              className="block bg-lime-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:bg-lime-700 transition"
            >
              Explore All Health & Fitness Courses
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

