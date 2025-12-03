import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Missed our Cyber Sale?
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Today only: Courses as low as $12.99. Get a second chance to save on skills.
                </p>
                <Link
                  href="/courses"
                  className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
                >
                  Explore Courses
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=400&fit=crop"
                  alt="Learning"
                  className="w-[500px] h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Learn essential career and life skills
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              Udemy helps you build in-demand skills fast and advance your career in a changing job market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Generative AI Card */}
              <Link
                href="/courses?category=ai"
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      <p className="text-4xl font-bold">AI</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>17M+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Generative AI</h3>
                  <svg
                    className="w-6 h-6 text-gray-900 group-hover:translate-x-2 transition-transform"
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
                </div>
              </Link>

              {/* IT Certifications Card */}
              <Link
                href="/courses?category=it"
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-4xl font-bold">🏆</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>14M+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">IT Certifications</h3>
                  <svg
                    className="w-6 h-6 text-gray-900 group-hover:translate-x-2 transition-transform"
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
                </div>
              </Link>

              {/* Data Science Card */}
              <Link
                href="/courses?category=data-science"
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                      <p className="text-4xl font-bold">📊</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>8.5M+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Science</h3>
                  <svg
                    className="w-6 h-6 text-gray-900 group-hover:translate-x-2 transition-transform"
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
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured topics by category</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Development</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses?topic=python" className="text-purple-600 hover:underline">Python</Link></li>
                  <li><Link href="/courses?topic=web-dev" className="text-purple-600 hover:underline">Web Development</Link></li>
                  <li><Link href="/courses?topic=machine-learning" className="text-purple-600 hover:underline">Machine Learning</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Business</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses?topic=entrepreneurship" className="text-purple-600 hover:underline">Entrepreneurship</Link></li>
                  <li><Link href="/courses?topic=communication" className="text-purple-600 hover:underline">Communication</Link></li>
                  <li><Link href="/courses?topic=management" className="text-purple-600 hover:underline">Management</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Design</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses?topic=graphic-design" className="text-purple-600 hover:underline">Graphic Design</Link></li>
                  <li><Link href="/courses?topic=ui-ux" className="text-purple-600 hover:underline">UI/UX Design</Link></li>
                  <li><Link href="/courses?topic=web-design" className="text-purple-600 hover:underline">Web Design</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Marketing</h3>
                <ul className="space-y-2">
                  <li><Link href="/courses?topic=digital-marketing" className="text-purple-600 hover:underline">Digital Marketing</Link></li>
                  <li><Link href="/courses?topic=seo" className="text-purple-600 hover:underline">SEO</Link></li>
                  <li><Link href="/courses?topic=social-media" className="text-purple-600 hover:underline">Social Media</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
