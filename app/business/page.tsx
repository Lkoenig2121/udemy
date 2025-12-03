import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Udemy Business
              </h1>
              <p className="text-2xl mb-8 text-purple-100">
                Upskill your team with top-rated courses, anytime, anywhere
              </p>
              <p className="text-lg mb-8 text-purple-100">
                Get your team access to over 25,000+ top Udemy courses, anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/business/demo"
                  className="px-8 py-4 bg-white text-purple-700 font-bold rounded hover:bg-gray-100 transition text-center"
                >
                  Request a Demo
                </Link>
                <Link
                  href="/courses"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-purple-800 transition text-center"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">25,000+</h3>
                <p className="text-gray-700">Courses in our collection</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">14</h3>
                <p className="text-gray-700">Learning languages supported</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">90%</h3>
                <p className="text-gray-700">Employee satisfaction rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why organizations choose Udemy Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert-led courses</h3>
                <p className="text-gray-600">
                  Learn from industry experts and gain practical skills that drive results.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Learn on your schedule</h3>
                <p className="text-gray-600">
                  Access courses anytime, anywhere, on any device. Perfect for busy teams.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable insights</h3>
                <p className="text-gray-600">
                  Track team progress and measure learning outcomes with powerful analytics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global community</h3>
                <p className="text-gray-600">
                  Join 14,000+ organizations worldwide that trust Udemy Business.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Latest tech skills</h3>
                <p className="text-gray-600">
                  Stay ahead with courses on AI, cloud computing, data science, and more.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated support</h3>
                <p className="text-gray-600">
                  Get help from our customer success team whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies using Udemy Business to develop their workforce
            </p>
            <Link
              href="/business/contact"
              className="inline-block px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
            >
              Contact Sales
            </Link>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <h3 className="text-center text-gray-600 text-sm uppercase mb-8">
              Trusted by companies of all sizes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center text-2xl font-bold text-gray-400">Apple</div>
              <div className="text-center text-2xl font-bold text-gray-400">Amazon</div>
              <div className="text-center text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-center text-2xl font-bold text-gray-400">Google</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

