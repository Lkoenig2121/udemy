'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function TeachSignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    reason: '',
    hearAbout: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Instructor signup:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white rounded-lg shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Thank You for Your Interest!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We've received your application to become a Udemy instructor. Our team will review your information and get back to you within 2-3 business days.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>What's next?</strong>
                </p>
                <ul className="text-left space-y-2 text-gray-600 max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Check your email for a confirmation message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Our team will review your application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>You'll receive next steps within 2-3 business days</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 space-x-4">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                >
                  Back to Home
                </Link>
                <Link
                  href="/teach"
                  className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
          <div className="max-w-[1340px] mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Become an Instructor Today
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of instructors teaching millions of students worldwide
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Start Your Teaching Journey
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 2-3 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <label htmlFor="expertise" className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Expertise *
                  </label>
                  <select
                    id="expertise"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select your expertise</option>
                    <option value="development">Development & Programming</option>
                    <option value="business">Business & Entrepreneurship</option>
                    <option value="design">Design & Creative</option>
                    <option value="marketing">Marketing & Sales</option>
                    <option value="it">IT & Software</option>
                    <option value="personal">Personal Development</option>
                    <option value="teaching">Teaching & Academics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {/* Reason */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to teach on Udemy? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                    placeholder="Tell us about your motivation to teach..."
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label htmlFor="hearAbout" className="block text-sm font-semibold text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend/Colleague</option>
                    <option value="ad">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Free to Start</h3>
                <p className="text-sm text-gray-600">No upfront costs to create and publish courses</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Earn Revenue</h3>
                <p className="text-sm text-gray-600">Get paid monthly for each enrollment</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-sm text-gray-600">Access millions of students worldwide</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

