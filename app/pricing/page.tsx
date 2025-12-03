import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Plans & Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your learning journey
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-[1340px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Personal Plan */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Plan</h3>
                <p className="text-gray-600 mb-6">For individuals</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$12.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Access to 12,000+ courses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Certificates of completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Lifetime access</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full py-3 bg-gray-900 text-white font-semibold text-center rounded hover:bg-gray-800 transition"
                >
                  Get Started
                </Link>
              </div>

              {/* Team Plan */}
              <div className="bg-white border-2 border-purple-600 rounded-lg p-8 hover:shadow-xl transition relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Team Plan</h3>
                <p className="text-gray-600 mb-6">For small teams</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$29.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Everything in Personal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Up to 20 team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Team analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <Link
                  href="/signup"
                  className="block w-full py-3 bg-purple-600 text-white font-semibold text-center rounded hover:bg-purple-700 transition"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Everything in Team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Unlimited users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Advanced analytics & insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Custom integrations (LMS, SSO)</span>
                  </li>
                </ul>
                <Link
                  href="/business/contact"
                  className="block w-full py-3 bg-gray-900 text-white font-semibold text-center rounded hover:bg-gray-800 transition"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1340px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Can I try Udemy before purchasing?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer a 30-day money-back guarantee on all courses. Try any course risk-free.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Do courses have lifetime access?
                </h3>
                <p className="text-gray-600">
                  Yes, once you purchase a course, you have lifetime access to it on all your devices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Are there group discounts?
                </h3>
                <p className="text-gray-600">
                  Yes! Our Team and Enterprise plans offer significant discounts for organizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

