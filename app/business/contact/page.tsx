'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function BusinessContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    country: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Contact sales:', formData);
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
                Thank You for Reaching Out!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We've received your request and one of our sales representatives will contact you within 24 hours to discuss how Udemy Business can help your organization.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>What happens next?</strong>
                </p>
                <ul className="text-left space-y-2 text-gray-600 max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Check your email for a confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>A sales representative will reach out within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>We'll schedule a personalized demo for your team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Get a custom quote based on your needs</span>
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
                  href="/business"
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
              Transform Your Organization
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Let's discuss how Udemy Business can help develop your workforce
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Contact Our Sales Team
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule a personalized demo.
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
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Acme Corporation"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Head of Learning & Development"
                    />
                  </div>
                </div>

                {/* Company Size & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      <option value="1-20">1-20 employees</option>
                      <option value="21-50">21-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1,000 employees</option>
                      <option value="1001-5000">1,001-5,000 employees</option>
                      <option value="5000+">5,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="IN">India</option>
                      <option value="JP">Japan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your learning goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                    placeholder="Share any specific requirements or questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
                  >
                    Request Demo
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                What you'll get with Udemy Business
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">25,000+ Courses</h4>
                  <p className="text-sm text-gray-600">Access to our entire business collection</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fresh Content</h4>
                  <p className="text-sm text-gray-600">Regularly updated with new courses</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Analytics</h4>
                  <p className="text-sm text-gray-600">Track team progress and engagement</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Expert Support</h4>
                  <p className="text-sm text-gray-600">Dedicated customer success team</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

