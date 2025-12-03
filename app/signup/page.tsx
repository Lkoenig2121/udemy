'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect to courses page
        router.push('/courses');
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Unable to connect to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <svg
              className="w-24 h-8 mx-auto"
              viewBox="0 0 91 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.05 8.112L7.024 4.056 7.024 4.056C6.71644 3.89948 6.37094 3.81679 6.02 3.817 6.02 3.817 6.02 3.817 6.02 3.817 5.67 3.817 5.32 3.9 5.012 4.056L5.012 4.056-0.063 7.135V27.87L5.012 30.948 5.012 30.948C5.32 31.105 5.67 31.188 6.02 31.188 6.37 31.188 6.72 31.105 7.027 30.948L7.027 30.948 14.05 26.892V8.112zM5.5 26.867L2 25.146V8.118L5.5 9.867V26.867zM12.55 25.145L8.062 27.435V8.118L12.55 5.828V25.145z"
                fill="#A435F0"
              />
              <text
                x="20"
                y="24"
                fill="#000"
                fontSize="20"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                udemy
              </text>
            </svg>
          </Link>
        </div>

        {/* Signup Form Card */}
        <div className="border border-gray-300 rounded-lg p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign up and start learning</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Create a password"
                required
                minLength={6}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition disabled:bg-purple-400"
            >
              {isLoading ? 'Creating account...' : 'Sign up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 font-semibold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing up, you agree to Udemy's{' '}
            <Link href="/terms" className="underline">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

