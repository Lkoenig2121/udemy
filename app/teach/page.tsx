import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TeachPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Come teach with us
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Become an instructor and change lives — including your own
                </p>
                <Link
                  href="/teach/signup"
                  className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                  alt="Teaching"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              So many reasons to start
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teach your way</h3>
                <p className="text-gray-600">
                  Publish the course you want, in the way you want, and always have control of your own content.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inspire learners</h3>
                <p className="text-gray-600">
                  Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get rewarded</h3>
                <p className="text-gray-600">
                  Expand your professional network, build your expertise, and earn money on each paid enrollment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How to begin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Plan your curriculum</h3>
                <p className="text-sm text-gray-600">
                  You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Record your video</h3>
                <p className="text-sm text-gray-600">
                  Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you're ready to start.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Launch your course</h3>
                <p className="text-sm text-gray-600">
                  Gather your first ratings and reviews by promoting your course through social media and your professional networks.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  4
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Earn money</h3>
                <p className="text-sm text-gray-600">
                  Get paid when students enroll in your course. Receive monthly payments via PayPal or Payoneer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Become an instructor today
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join one of the world's largest online learning marketplaces.
            </p>
            <Link
              href="/teach/signup"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

